const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartList = document.querySelector("#main-products-cart-list");

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
      parent.remove();
      updateCartTotal();
    })
  });
}

const addProductToCart = () => {
  addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
      const addButtonClicked = event.target;
      const parent = addButtonClicked.parentElement.parentElement;
      updateCartTotal();
    })
  });
}


//UPDATE QTY
const updateCartTotal = () => {
  let products = document.querySelectorAll('.product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const productItem = products[i];
    const priceElement = productItem.querySelectorAll('.product__price')[0];
    const qtylement = productItem.querySelectorAll('.product__qty')[0];
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = qtylement.value;
    total = total + (price * quantity);
  }

  document.querySelectorAll('#total-price')[0].innerHTML = '$' + total;
}
//Add to cart

renderAll();
