var carDiv = document.getElementById("categories");
var categories = [];
function getCategories() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:5500/assets/api/categories.json", true);
  xhr.onload = function () {
    try {
      const response = JSON.parse(this.responseText);
      if (response.status == "success") {
        response.data.forEach((category) => {
          var categoryDiv = document.createElement("div");
          categoryDiv.className = "col-md-3";
          categoryDiv.innerHTML = ` <h5 id="category_${category.id}" onclick="addActiveCategory(${category.id})" class="card-title">${category.name}</h5>`;
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
    category.children[0].classList.remove("activeCategory")
  );
  categories.forEach((category) => {
    var cat = category.children[0].id == "category_" + categoryId;
    if (cat) {
      category.children[0].classList.add("activeCategory");
    }
  });
  if (categoryId == 3) {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((p) => p.itemType == categoryId);
  }
  showProducts(filteredProducts);
}
