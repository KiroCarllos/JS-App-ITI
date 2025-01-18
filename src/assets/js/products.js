var products = [];
var filteredProducts = [];
var productContainer = document.getElementById("products");
function getProducts(category) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://fakestoreapi.com/products${
      category ? `/category/${category}` : ""
    }`,
    true
  );
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
    productDiv.className =
      "relative m-4 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md w-95";
    productDiv.innerHTML = `
      <div class="flex items-center justify-center  h-48 bg-gray-100"><img class="object-contain h-[50%]" src="${
        p.image
      }" alt="${p.title}" /></div>
      <div class="p-4">
      <h6 class="text-lg font-semibold text-gray-900 line-clamp-2 h-[60px]">${
        p.title
      }</h6>
      <div class="mt-6 flex items-center">
      <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">${
        p.rating.rate
      }</span>
      ${[...Array(5)]
        .map(
          (_, i) => `
      <svg aria-hidden="true" class="h-5 w-5 ${
        i < p.rating.rate ? "text-yellow-300" : "text-gray-300"
      }" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      `
        )
        .join("")}
      </div>
      </div>
      <div class="mt-4 flex items-center justify-between p-4">
      <span class="text-2xl font-bold text-gray-900">$${p.price}</span>
      <button class="rounded-full transform transition-all duration-500 hover:scale-105 border-2 border-gray-300 bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-900" onclick="addProductToCart('${
        p.id
      }','${p.title.replace(/'/g, "\\'")}','${p.price}')">
      <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      </button>
      </div>
    `;
    productContainer.appendChild(productDiv);
  });
}
