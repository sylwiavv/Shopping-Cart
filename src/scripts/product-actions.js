const cartProductsList = document.querySelector('#main-products-cart-list');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const productsArray = renderProducts();
const cartArray = [];

const renderFunction = () => {
  // renderCartProduct();
}

// ADD CLICK
addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', (event) => {
    const addButtonClicked = event.target;
    const parentButtonClicked = addButtonClicked.parentElement.parentElement;
    let productId = parentButtonClicked.dataset.productId;
    let productQuantity = 1; // wyciagnac value z inputa
    // console.log('Dodano');
    cartArray.push({
      Id: productId,
      Qty: productQuantity
    });
    // produkt o takim samym id -> sprawdzić czy istnieje i zwiekszyc tylko qty
    renderCart();
  })
})

const renderCart = () => {
  let products = cartArray.map((cartItem) => {
    let product = productsArray.filter(obj => {
      return cartItem.Id === obj.Sku;
    })[0];
    return product;
  })
  renderProducts(cartProductsList, products);
  console.log(products);
}

renderFunction();
