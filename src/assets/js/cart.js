var cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
showCart();
function showCart() {
  var cart_items = document.getElementById("cart-items");
  if (cart_items) {
    cart_items.innerHTML = "";

    if (cart.length === 0) {
      cart_items.innerHTML =
        "<tr class='text-center'><td colspan='4'>No items in cart</td></tr>";
    } else {
      cart.forEach((item) => {
        cartRow = document.createElement("tr");
        cartRow.innerHTML = `<td  >${item.name}</td>
                                        <td class="text-center ">${
                                          item.price
                                        }</td>
                                      <td>  
                                       <div class="cart-operators p-5  ">
                                         <i onclick="addProductToCart('${
                                           item.item_id
                                         }','${item.name}','${
          item.price
        }','decrease');showCart()" class="fa-solid fa-minus cursor-pointer  text-white bg-red-500"></i>
                                          ${item.qty}
                                         <i onclick="addProductToCart('${
                                           item.item_id
                                         }');showCart()"  class="fa-solid fa-plus cursor-pointer  text-white bg-lime-700"></i>
                                       </div>
                                      </td>
                                      </td>
                                        <td>$ ${item.total.toFixed(2)}</td>
                                        <td ><i id="trash" class="fa-solid fa-trash cursor-pointer  text-red-600 flex justify-center " onclick="deleteProductToCart('${
                                          item.item_id
                                        }')"></i></td>`;
        cart_items.appendChild(cartRow);
      });
    }
  }
}
getCartDetails();
function getCartDetails() {
  document.getElementById("cart-count").innerHTML = cart.length;
  return cart;
}
calcSummary();
function addProductToCart(
  item_id,
  name,
  price,
  operation = "increase",
  qty = 1
) {
  // case 1: if cart is empty will create a new item in cart
  // case 2: if item exit will update [ - |  +]
  var getItem = cart.find((i) => {
    return i.item_id === item_id;
  });
  if (getItem) {
    // update qty
    getItem.qty =
      operation === "increase" ? getItem.qty + qty : getItem.qty - qty;
    getItem.total = getItem.qty * getItem.price;
    // if qty is 0 remove the item from cart
    if (getItem.qty == 0) {
      deleteProductToCart(getItem.item_id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    var cartObj = {
      item_id,
      name: name,
      price: price,
      qty,
      total: qty * price,
    };
    cart.push(cartObj);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // to update the cart count & cart items
  getCartDetails();
  calcSummary();
}
function deleteProductToCart(item_id) {
  cart = cart.filter((item) => item.item_id != item_id);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  getCartDetails();
  calcSummary();
}
function calcSummary() {
  var totalQty = 0;
  var grandTotal = 0;
  cart.forEach((item) => {
    totalQty += item.qty;
    grandTotal += item.total;
  });
  if (document.getElementById("cart-items")) {
    document.getElementById("total-items") &&
      document.getElementById("grand-total");
    document.getElementById("total-items").innerHTML = totalQty;
    document.getElementById("total-items-cost").innerHTML =
      grandTotal.toFixed(2);
  }
}
