const cartProductsList = document.querySelector('#main-products-cart-list');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const productsArray = renderProducts();
const cartArray = [];

// ADD CLICK
addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', (event) => {
    const addButtonClicked = event.target;
    const parentButtonClicked = addButtonClicked.parentElement.parentElement;
    let productId = parentButtonClicked.dataset.productId;
    let productQty = parentButtonClicked.querySelector('.product__qty').value;
    productQty = parseInt(productQty);
    let items = document.querySelectorAll('#main-products-cart-list .product');

    const cartItem = cartArray.filter(item => {
        return item.Id === productId;
    })

    if (!cartItem.length) {
      cartArray.push({
        Id: productId,
        Qty: productQty
      });
    } else {
      cartItem[0].Qty = productQty + cartItem[0].Qty;
      console.log(cartItem[0]);
    }
    renderCart();
  })
})

// Render products in cart
const renderCart = () => {
  let products = cartArray.map((cartItem) => {
    let product = productsArray.filter(obj => {
      return cartItem.Id === obj.Sku;
    })[0];
    product.Qty = cartItem.Qty
    return product;
  })
  renderProducts(cartProductsList, products);
}