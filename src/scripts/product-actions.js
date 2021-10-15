const body = document.body;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const productList = document.querySelectorAll('.products-list-container');
const cartArray = [];

// ADD CLICK
addToCartButtons.forEach(addButton => {
  addButton.addEventListener('click', (event) => {
    const addButtonClicked = event.target;
    const parentButtonClicked = addButtonClicked.parentElement.parentElement.parentElement;
    let productId = parentButtonClicked.dataset.productId;
    let productQty = parentButtonClicked.querySelector('.product-information__qty').value;
    productQty = parseInt(productQty);

    if (isNaN(productQty) || productQty <= 0 || typeof productQty === 'string') {
      productQty = 1;
    } else {
      productQty = productQty;
    }

    const cartItem = cartArray.filter(item => {
        return item.Id === productId;
    });

    if (!cartItem.length) {
      cartArray.push({
        Id: productId,
        Qty: productQty
      });

    } else {
      cartItem[0].Qty = productQty + cartItem[0].Qty;
    }

    renderCart();
    updateQtyValueInCart();
    updateNumberInCart();
  });
});

// Render products in cart
const renderCart = () => {
  let products = cartArray.map((cartItem) => {
    let product = productsArray.filter(obj => {
      return cartItem.Id === obj.Sku;
    })[0];
    product.Qty = cartItem.Qty;
    return product;
  });
  renderCartProducts(products);
  removeCartProduct();
  totalCartPrice();

  let cartInputs = document.querySelectorAll('.cart_qty');
  cartInputs.forEach(cartInput => {
      cartInput.disabled = true;
  });
}

// Removing product from cart
const removeCartProduct = () => {
  const removeButtons = document.querySelectorAll('.remove-from-cart');
  removeButtons.forEach(removeButton => {
    removeButton.addEventListener('click', (event) => {
      const parentButtonClicked = removeButton.parentElement.parentElement;
      let productId = parentButtonClicked.dataset.productId;
      let productToRemove = '';

      productToRemove = cartArray.find(function(item) {
        return item.Id === productId;
      });

      let index = cartArray.indexOf(productToRemove);
      cartArray.splice(index,1);

      updateNumberInCart();
      renderCart();
    })
  });
}

const updateNumberInCart = () => {
  const amountCart = document.querySelector('#cart-product-number');
  const cartIsEmpty = document.querySelector('.cart-information');
  amountCart.innerHTML = cartArray.length;

  let textA = "Twój koszyk jest pusty";
  let textB = "";
  cartIsEmpty.innerHTML = (cartArray.length == 0) ? textA : textB;
  cartArray.length == 0 ? cartIsEmpty.classList.add('empty') : cartIsEmpty.classList.remove('empty');
}

//Total cart price
const totalCartPrice = () => {
  const cartItems = document.querySelectorAll('#main-products-cart-list > .product');
  if ( cartItems.length ) {
    let total = 0;
     for ( var i = 0; i < cartItems.length; i++) {
       let prodCart = cartItems[i];
       let prodCartPrice = prodCart.querySelectorAll('.product-information__price')[0];
       let price = parseFloat(prodCartPrice.innerText.replace('$', ''));
       let prodCartQty = prodCart.querySelectorAll('.product-information__qty')[0];
       let qty = prodCartQty.value;
       qty = parseInt(qty, 10);
       total = total + (price * qty);
     }
     document.querySelectorAll('#total-price')[0].innerHTML = '$' + total;

   } else if (cartItems.length === 0) {
     document.querySelectorAll('#total-price')[0].innerHTML = '$' + 0;
   }
}

const parent = document.querySelector('.minicart-wrapper');
const child = document.querySelector('#cart-list');
const closeMinicartBtn = document.querySelector('#close-minicart');

parent.addEventListener('click', (e) => {
   if(e.target !== e.currentTarget) {
     child.classList.add("active");
   } else {
     parent.classList.toggle('active');
     body.classList.toggle('not-scroll');
   }
});

body.addEventListener('click', (e) => {
   if(e.target == e.currentTarget && body.classList.contains('not-scroll')) {
     body.classList.remove('not-scroll');
     parent.classList.remove('active');
   }
});

//TODO
closeMinicartBtn.addEventListener('click', (e) => {
   if(e.target == e.currentTarget && body.classList.contains('not-scroll')) {
     body.classList.remove('not-scroll');
     parent.classList.remove('active');
   }
});

const updateCartProductQty = (productId, itemQty) => {
  let productCart = cartArray.filter(item => {
    return item.Id === productId;
  })[0];
  productCart.Qty = itemQty;
}

const updateQtyValueInCart = () => {
 const increase = document.querySelectorAll('.increase');
 const decrease = document.querySelectorAll('.decrease');

  increase.forEach((increaseButton) => {
    increaseButton.addEventListener('click', (e) => {
        const clickedButton = event.target;
        let input = e.target.parentNode.querySelector('.cart_qty');
        console.log(input);
        let parentButtonClicked = clickedButton.parentElement.parentElement.parentElement.parentElement;
        let productId = parentButtonClicked.dataset.productId;
        input = parseInt(input.value, 10);
        input = isNaN(input) ? 0 : input;
        input++;
        e.target.parentNode.querySelector('.cart_qty').value = input;
        totalCartPrice();
        updateCartProductQty(productId, input);
    });
  });

  decrease.forEach((decreaseButton) => {
    decreaseButton.addEventListener('click', (e) => {
        const clickedButton = event.target;
        let input = e.target.parentNode.querySelector('.cart_qty');
        let parentButtonClicked = clickedButton.parentElement.parentElement.parentElement.parentElement;
        let productId = parentButtonClicked.dataset.productId;
        input = parseInt(input.value, 10);
        input = isNaN(input) ? 0 : input;
        input < 1 ? input = 1 : '';
        input--;
        e.target.parentNode.querySelector('.cart_qty').value = input;
        totalCartPrice();
        updateCartProductQty(productId, input);
    });
  });
}
