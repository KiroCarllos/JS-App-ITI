var cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
showCart();
function showCart() {
  var cart_items = document.getElementById("cart-items");
  cart_items.innerHTML = "";
  if (cart_items) {
    if (cart.length === 0) {
      cart_items.innerHTML =
        "<tr class='text-center'><td colspan='4'>No items in cart</td></tr>";
    } else {
      cart.forEach((item) => {
        cartRow = document.createElement("tr");
        cartRow.innerHTML = `<td class="rounded-start-5" >${item.name}</td>
                                        <td>${item.price}</td>
                                      <td>  
                                       <div class="cart-operators">
                                         <i class="fa-solid fa-minus text-danger"></i>
                                          ${item.qty}
                                         <i class="fa-solid fa-plus text-success"></i>
                                       </div>
                                      </td>
                                      </td>
                                        <td>${item.total}</td>
                                        <td class="rounded-end-5"><i id="trash" class="fa-solid fa-trash text-danger " onclick="deleteProductToCart('${item.item_id}')"></i></td>`;
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
}
function deleteProductToCart(item_id) {
  cart = cart.filter((item) => item.item_id != item_id);

  // var item = cart.find((i) => {
  //   return i.item_id === item_id;
  // });

  // cart.splice(cart.indexOf(item), 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  getCartDetails();
}
