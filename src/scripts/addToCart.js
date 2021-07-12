const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const products = document.querySelectorAll('.product');
const cartList = document.querySelector("#main-products-cart-list");
const cart = [];
const qty = document.querySelectorAll('.product__qty').textContent;

const renderAll = () => {
  addProductToCart();
  removeProductFromCart();
}

//REMOVE ITEM
const removeProductFromCart = () => {
  removeFromCartButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const removeButtonClicked = event.target;
      const parent = removeButtonClicked.parentElement.parentElement;
      parent.remove();

    })
  });
}

const addProductToCart = () => {
  addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
      const addButtonClicked = event.target;
      const parent = addButtonClicked.parentElement.parentElement;
    })
  });
}

const productList = document.querySelector('#main-products-list');

//UPDATE QTY
// const updateCartTotal = () => {
//   for (let i = 0; i < products.length i++;) {
//     console.log(products[i]);
//     console.log('test');
//   }
// }
//Add to cart

renderAll();
