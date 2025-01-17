const body = document.body;
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.querySelector('.cart-icon');
const amountCart = document.querySelector('#cart-product-number');
let cartArray = [];
let timer;

const parent = document.querySelector('.minicart-wrapper');
const closeMinicartBtn = document.querySelector('#close-minicart');

// LOCAL STORAGE
const productsFromLocalStorage = JSON.parse(localStorage.getItem("myLocalCartProducts"));

// ADD CLICK
addToCartButtons.forEach(addButton => {
    addButton.addEventListener('click', (event) => {
        const addButtonClicked = event.target;
        const parentButtonClicked = addButtonClicked.parentElement.parentElement;
        let productId = parentButtonClicked.dataset.productId;
        let productQty = parentButtonClicked.querySelector('.product-information__qty').value;
        let productTitle = parentButtonClicked.querySelector('.product-information__title').textContent;
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

        let modalContainer = document.createElement('div');
        modalContainer.setAttribute('class', 'add-to-cart-modal');
        modalContainer.innerHTML = "<p>" + "<span class='product-modal__title'>" + `${productTitle}` + "</span>" + " " + "has been added to your cart" + "</p>";
        let oldTimer = timer;

        timer = window.setTimeout(() => modalContainer.classList.add('list-leave-active'), 3000);
        window.setTimeout(() => document.querySelector('.list-leave-active').remove(), 5000);

        let getModalContainer = parentButtonClicked.querySelector('.add-to-cart-modal');
        let getImageContainer = parentButtonClicked.querySelector('.product__image-container').cloneNode(true);

        if (getModalContainer == undefined) {
            body.appendChild(modalContainer);
            modalContainer.prepend(getImageContainer);
        } else {
            window.clearTimeout(oldTimer);
            getModalContainer.innerHTML = "<p>Dodano kolejną  sztukę" + " " + `${productTitle}` + "</p>";
        }

        cartIcon.classList.add('shake');
        setTimeout(() => cartIcon.classList.remove('shake'), 500);

        renderCart();
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
    updateQtyValueInCart();
    totalCartPrice();

    let cartInputs = document.querySelectorAll('.cart_qty');
    cartInputs.forEach(cartInput => {
        cartInput.disabled = true;
    });

    localStorage.setItem("myLocalCartProducts", JSON.stringify(cartArray));
}

// Removing product from cart
const removeCartProduct = () => {
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(removeButton => {
        removeButton.addEventListener('click', (event) => {
            const parentButtonClicked = removeButton.parentElement.parentElement;
            let productId = parentButtonClicked.dataset.productId;
            let productToRemove = '';

            productToRemove = cartArray.find(function (item) {
                return item.Id === productId;
            });

            let index = cartArray.indexOf(productToRemove);
            cartArray.splice(index, 1);

            updateNumberInCart();
            renderCart();
        })
    });
}

const updateNumberInCart = () => {
    const cartIsEmpty = document.querySelector('.cart-information');
    amountCart.innerHTML = cartArray.length;

    let emptyCartText = "Your cart is empty";
    let productsInCartText = "";
    cartIsEmpty.innerHTML = (cartArray.length == 0) ? emptyCartText : productsInCartText;
    cartArray.length == 0 ? cartIsEmpty.classList.add('empty') : cartIsEmpty.classList.remove('empty');
}

//Total cart price
const totalCartPrice = () => {
    const cartItems = document.querySelectorAll('#main-products-cart-list > .product');
    if (cartItems.length) {
        let total = 0;
        for (let i = 0; i < cartItems.length; i++) {
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


parent.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        parent.classList.toggle('active');
        body.classList.toggle('not-scroll');
    }
});

body.addEventListener('click', (e) => {
    if (e.target == e.currentTarget && body.classList.contains('not-scroll')) {
        body.classList.remove('not-scroll');
        parent.classList.remove('active');
    }
});

//TODO
closeMinicartBtn.addEventListener('click', (e) => {
    if (e.target == e.currentTarget && body.classList.contains('not-scroll')) {
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
            console.log(typeof input);
            input = isNaN(input) ? 0 : input;
            input < 1 ? input = 1 : '';
            input--;
            e.target.parentNode.querySelector('.cart_qty').value = input;
            totalCartPrice();
            updateCartProductQty(productId, input);
        });
    });
}

if (productsFromLocalStorage) {
    cartArray = productsFromLocalStorage;

    updateNumberInCart();
    renderCart();
}