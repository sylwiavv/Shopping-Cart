const cartProductsList = document.querySelector('#main-products-cart-list');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cartArray = [];

// ADD CLICK
addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', (event) => {
    const addButtonClicked = event.target;
    const parentButtonClicked = addButtonClicked.parentElement.parentElement;
    let productId = parentButtonClicked.dataset.productId;
    let productQty = parentButtonClicked.querySelector('.product__qty').value;
    productQty = parseInt(productQty);

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
    product.Qty = cartItem.Qty;
    return product;
  })
  renderProducts(cartProductsList, products);
  removeCartProduct();
}

const removeCartProduct = () => {
  const removeButtons = document.querySelectorAll('.remove-from-cart');
  console.log(removeButtons);
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const parentButtonClicked = removeButton.parentElement.parentElement;
      let productId = parentButtonClicked.dataset.productId;

      let productCart = cartArray.filter(item => {
          return item.Id === productId;
      });
      
      renderCart();
    })
  });
}
