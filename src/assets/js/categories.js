var carDiv = document.getElementById("categories");
var categories = [];
function getCategories() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:3000/categories", true);
  xhr.onload = function () {
    try {
      const response = JSON.parse(this.responseText);
      if (xhr.status == 200) {
        response.forEach((category) => {
          var categoryDiv = document.createElement("div");
          categoryDiv.className = "w-full md:w-1/4";
          categoryDiv.innerHTML = ` <h5 id="category_${category.id}" onclick="addActiveCategory(${category.id})" class="hover:animate-none transform scale-105 transition-all duration-500 animate-bounce bg-white border-2 border-gray-300 rounded-md text-center p-4 cursor-pointer text-xs w-[95%]">${category.name}</h5>`;
          carDiv.appendChild(categoryDiv);
        });
        categories = response.data;
        addActiveCategory();
      }
    } catch (e) {
      console.log(e);
    }
  };
  xhr.onerror = function () {
    console.log("Request Error");
  };
  xhr.send();
}
var cat_id;

function addActiveCategory(categoryId = 3) {
  cat_id = categoryId;
  const categories = Array.from(carDiv.children);
  categories.forEach((category) =>
    category.children[0].classList.remove("active-category")
  );
  categories.forEach((category) => {
    var cat = category.children[0].id == "category_" + categoryId;
    if (cat) {
      category.children[0].classList.add("active-category");
    }
  });
  if (categoryId == 3) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => p.itemType == categoryId);
  }
  showProducts(filteredProducts);
}
