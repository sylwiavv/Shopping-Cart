const cartProductsList = document.querySelector('#main-products-cart-list');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cartArray = [];

// ADD CLICK
addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', (event) => {
    const addButtonClicked = event.target;
    const parentButtonClicked = addButtonClicked.parentElement.parentElement.parentElement;
    let productId = parentButtonClicked.dataset.productId;
    let productQty = parentButtonClicked.querySelector('.product-information__qty');
    productQty = parseInt(productQty);

    if (isNaN(productQty) || productQty <= 0 || typeof productQty === 'string') {
      productQty = 1;
    } else {
      productQty = productQty;
    }

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
    // totalCartPrice();
    updateNumberInCart();
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
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const parentButtonClicked = removeButton.parentElement.parentElement;
      let productId = parentButtonClicked.dataset.productId;

      let productCart = cartArray.filter(item => {
          return item.Id === productId;
      });

      cartArray.pop(productCart);

      renderCart();
      updateNumberInCart();
    })
  });
}

const updateNumberInCart = () => {
  const amountCart = document.querySelector('#cart-product-number');
  amountCart.innerHTML = cartArray.length;
}

//TOTAL CART
// const totalCartPrice = () => {
//   const cartItems = document.querySelector('#main-products-cart-list');
//
//     const priceCartItems = cartItems.querySelectorAll('.product__price');
//     const qtyCartItems = cartItems.querySelectorAll('.product__qty');
//       let item = cartItems[i];
//       console.log(priceCartItems[i]);
// }
