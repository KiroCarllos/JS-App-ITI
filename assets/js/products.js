var products = [];
var filteredProducts = [];
var productContainer = document.getElementById("products");
function getProducts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.letsdonuts.net/api/Items/GetAllItems", true);
  xhr.onload = function () {
    if (this.status === 200) {
      try {
        const allProducts = JSON.parse(this.responseText);
        products = allProducts;
        filteredProducts = allProducts;
        showProducts(filteredProducts);
      } catch (e) {
        console.log(e);
      }
    }
  };
  xhr.onerror = function () {
    console.log("Request Error");
  };

  xhr.send();
}

function showProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((p) => {
    var productDiv = document.createElement("div");
    productDiv.className = "col-md-3";
    productDiv.innerHTML = `    
                  <div class="product">
                  <img src="https://api.letsdonuts.net/${p.image}" class="card-img-top"
                      alt="...">
                  <hr>
                  <div class="card-body">
                      <h6 class="card-title">${p.nameEn}</h6>
                      <small class="text-muted">${p.descriptionEn}</small>
                      <div class="row">
                          <div class="col-md-8 d-flex  align-items-center">
                              <small class="text-success ">$${p.price}</small>
                              <small class="text-danger text-decoration-line-through ms-3">$${p.salePrice}</small>
                          </div>
                          <div class="col-md-4 d-flex justify-content-center align-items-center">
                              <button class="btn btn-dark cart" onclick="addToCart(0)"><i
                                      class="fas fa-shopping-cart "></i></button>
                          </div>
                          <div class="col-md-12">
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                          </div>
                      </div>
                  </div>
                  </div>
              `;
    productContainer.appendChild(productDiv);
  });
}
