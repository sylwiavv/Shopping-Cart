const products = [
    {
        Name: 'Product octopus',
        Qty: 2,
        Price: '$123',
        Image: "images/octopus.svg"
    },
    {
        Name: 'Product dog',
        Qty: 2,
        Price: '$123',
        Image: "images/dog.svg"
    },
    {
        Name: 'Product horse',
        Qty: 2,
        Price: '$23',
        Image: "images/horse.svg"
    },
    {
        Name: 'Product cow',
        Qty: 2,
        Price: '$12 333',
        Image: "images/cow.svg"
    },
    {
        Name: 'Product zebra',
        Qty: 2,
        Price: '$123',
        Image: "images/zebra.svg"
    },
    {
        Name: 'Product cat',
        Qty: 90,
        Price: '$123',
        Image: "images/cat.svg"
    },
    {
        Name: 'Product flamingo',
        Qty: 2,
        Price: '$123',
        Image: "images/flamingo.svg"
    },
    {
        Name: 'Product giraffe',
        Qty: 2,
        Price: '$123',
        Image: "images/giraffe.svg"
    },
    {
        Name: 'Product whale',
        Qty: 2,
        Price: '$123',
        Image: "images/whale.svg"
    }
];

const productList = document.querySelector('#product-list-second');

// Make html list with products
productList.innerHTML = products.map(product =>
    `<li class="odd">
        <img src="${product.Image}"/>
        <div>
            <h3>${product.Name}</h3>
            <p>Qty: ${product.Qty}</p>
            <p class="price">${product.Price}</p>
        </div>
    </li>`
).join('')