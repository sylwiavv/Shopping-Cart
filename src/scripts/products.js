const newProducts =(Name, Qty, Price, Image) => {
    return {
        Name,
        Qty,
        Price,
        Image
    }
};

let productsArray = [
    newProducts('Product whale', 2, '$123', 'images/whale.svg'),
    newProducts('Product giraffe', 2, '$123', 'images/giraffe.svg'),
    newProducts('Product flamingo', 2, '$123', 'images/flamingo.svg'),
    newProducts('Product cat', 2, '$123', 'images/cat.svg'),
    newProducts('Product zebra', 2, '$123', 'images/zebra.svg'),
    newProducts('Product cow', 2, '$123', 'images/cow.svg'),
    newProducts('Product horse', 2, '$123', 'images/horse.svg'),
    newProducts('Product dog', 2, '$123', 'images/dog.svg'),
    newProducts('Product octopus', 2, '$123', 'images/octopus.svg')
];

const {Name} = productsArray;
const Names = productsArray[0];

const productList = document.querySelector('#product-list-second');
const odd = 'odd';
const add = 'add';

// Make html list with products
productList.innerHTML = productsArray.map(product =>
    `<li>
        <img src="${product.Image}"/>
        <div>
            <h3>${product.Name}</h3>
            <p>Qty: ${product.Qty}</p>
            <p class="price">${product.Price}</p>
        </div>
    </li>`
).join('')

let returnAnyProp = (objectName, propName) => objectName[propName];

console.log(returnAnyProp(products, 'Name'));

//
// (function() {
//     var id = 0;
//
//     function generateId() { return id++; };
//
//     Object.prototype.id = function() {
//         var newId = generateId();
//
//         this.id = function() { return newId; };
//
//         return newId;
//     };
// })();