var products = [];
var cart = [];

$.get("http://localhost:3000/san-pham/api/all-product", (data) => {
  products = data;
  console.log(products);
});

$(document).on("click", ".addcart", function () {
  const id = $(this).parents(".product-item").data("id");

  cart = JSON.parse(localStorage.getItem("keycart"));
  //kiem tra xem gio hang da co san pham hay chua
  const idx = cart.findIndex((val) => val.MADONG === id);
  console.log(idx);

  //add san pham vao gio hang
  if (idx !== -1) {
    cart[idx].quantity = cart[idx].quantity + 1;
  } else {
    const item = products.find((val) => val.MADONG === id);
    cart.push({ ...item, quantity: 1 });
  }

  var sum = cart.map((val) => val.GIA * val.quantity);
  saveitemlocalstorage(cart);
  rendercart(cart);

  console.log(laydanhsachgiohang());
});

$(document).on("click", ".addcartdetail", function () {
  const id = $(this).parents(".product-content").data("id");

  cart = JSON.parse(localStorage.getItem("keycart"));
  //kiem tra xem gio hang da co san pham hay chua
  const idx = cart.findIndex((val) => val.MADONG === id);
  console.log(idx);

  //add san pham vao gio hang
  if (idx !== -1) {
    cart[idx].quantity = cart[idx].quantity + 1;
  } else {
    const item = products.find((val) => val.MADONG === id);
    cart.push({ ...item, quantity: 1 });
  }

  var sum = cart.map((val) => val.GIA * val.quantity);
  saveitemlocalstorage(cart);
  rendercart(cart);

  console.log(laydanhsachgiohang());
});

function rendercart(cart) {
  const cartarray = JSON.parse(localStorage.getItem("keycart"));
  $(".cart-number").text(cartarray.length);
}

$(document).on("click", ".delete-item", function () {
  const id = $(this).parents("li").data("id");
  const idx = cart.findIndex((val) => val.MADONG === id);
  cart.splice(idx, 1);
  rendercart(cart);
});

//luu danh sach vao localstorage
function saveitemlocalstorage(cart) {
  // chuyen thanh chuoi json
  var jsoncart = JSON.stringify(cart);

  // //luu vao localstorage
  localStorage.setItem("keycart", jsoncart);
  console.log("đưa vào giỏ hàng được rồi!!! :)))))");
}

function laydanhsachgiohang() {
  var danhsach = new Array();

  var jsonCart = localStorage.getItem("keycart");

  if (jsonCart != null) {
    danhsach = JSON.parse(jsonCart);
  }

  return danhsach;
}
