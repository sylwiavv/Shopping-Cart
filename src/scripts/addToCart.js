const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const products = document.querySelectorAll('.product');
const cartList = document.querySelector("#main-products-cart-list");
const cart = [];
const qty = document.querySelectorAll('.product__qty').textContent;

const renderAll = () => {
  updateCartTotal();
  addProductToCart();
  removeProductFromCart();
}

//REMOVE ITEM
const removeProductFromCart = () => {
  removeFromCartButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const removeButtonClicked = event.target;
      const parent = removeButtonClicked.parentElement.parentElement;
      updateCartTotal();
      parent.remove();
    })
  });
}

const addProductToCart = () => {
  addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
      const addButtonClicked = event.target;
      const parent = addButtonClicked.parentElement.parentElement;
      console.log('test');
      updateCartTotal();
    })
  });
}

const productList = document.querySelector('#main-products-list');

//UPDATE QTY
const updateCartTotal = () => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const productItem = products[i];
    const priceElement = productItem.querySelectorAll('.product__price')[0];
    const qtylement = productItem.querySelectorAll('.product__qty')[0];
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = qtylement.value;
    total = total + (price * quantity);
    console.log(total);
  }

  document.querySelectorAll('#total-price')[0].innerHTML = '$' + total;
}
//Add to cart

renderAll();
