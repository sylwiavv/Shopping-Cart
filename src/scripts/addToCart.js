const addToCartButtons = document.querySelectorAll(".add-to-cart");
const products = document.querySelectorAll('.product');
const cartList = document.querySelector("#main-products-cart-list");
const cart = [];
const qty = document.querySelectorAll('.product__qty').textContent;
console.log(qty);

addToCartButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    console.log('cart');
    button.style.backgroundColor='red';
    const parent = button.parentElement.parentElement;
    parent.style.backgroundColor='green';

  })
});
