var carDiv = document.getElementById("categories");
var categories = [];
function getCategories() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fakestoreapi.com/products/categories", true);
  xhr.onload = function () {
    try {
      const response = JSON.parse(this.responseText);
      if (xhr.status == 200) {
        response.forEach((category) => {
          var categoryDiv = document.createElement("div");
          categoryDiv.className = "w-full md:w-1/4 p-2";
          categoryDiv.innerHTML = `<h5 id="${category}" onclick="addActiveCategory('${category.replace(
            /'/g,
            "\\'"
          )}')" class="transform scale-105 transition-all duration-500 bg-white border-2 border-gray-300 rounded-md text-center p-4 cursor-pointer text-xs w-full hover:bg-gray-100 w-95">${category}</h5>`;
          carDiv.appendChild(categoryDiv);
        });
        const categoriesD = Array.from(carDiv.children);
        categoriesD[0].children[0].classList.add("active-category");
        getProducts(response[0]);
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

function addActiveCategory(catName) {
  const categories = Array.from(carDiv.children);

  categories.forEach((category) =>
    category.children[0].classList.remove("active-category")
  );

  categories.forEach((category) => {
    var cat = category.children[0].id == catName;
    if (cat) {
      category.children[0].classList.add("active-category");
    }
  });
  getProducts(catName);
}
