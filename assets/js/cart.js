var cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

var cart_items = document.getElementById("cart-items");
if (cart_items) {
  if (cart.length === 0) {
    cart_items.innerHTML =
      "<tr class='text-center'><td colspan='4'>No items in cart</td></tr>";
  } else {
    cart.forEach((item) => {
      cart_items.createElement("tr");
      cart_items.innerHTML = `<td>${item.name}</td>
                                        <td>${item.price}</td>
                                        <td>${item.qty}</td>
                                        <td>${item.total}</td>
                                        <td><i class="fa-solid fa-trash text-danger"></i></td>`;

      cart_items.appendChild(cart_items);
    });
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
    console.log("item exist");
  } else {
    // new item in cart
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
function deleteProductToCart() {}
