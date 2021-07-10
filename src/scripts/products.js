const createProduct = (Name, Qty, Price, Sku, Image) => {
    return {
        Name,
        Qty,
        Price,
        Sku,
        Image
    }
};

let productsArray = [
    createProduct('Strelitzia Nicolai', 2, 123, 'Sku1', 'images/plants/strelitzia_nicolai.jpeg'),
    createProduct('Alocasia Amazonian elephant ear', 2, 123, 'Sku2', 'images/plants/alocasia_amazonian_elephant_ear.jpeg'),
    createProduct('Ficus Elastica', 2, 123, 'Sku3', 'images/plants/ficus_elastica.png'),
    createProduct('Monstera deliciosa thai constellation', 2, 123, 'Sku4', 'images/plants/monstera_deliciosa_thai_constellation.jpeg'),
    createProduct('Ficus Tineke', 2, 123, 'Sku5', 'images/plants/ficus_tineke.jpeg'),
    createProduct('Senecio Rowleyanus String of pearls', 2, 123, 'Sku6', 'images/plants/senecio_rowleyanus_string_of_pearls.jpeg'),
    createProduct('Monstera Deliciosa', 2, 123, 'Sku7', 'images/plants/monstera_deliciosa.jpeg'),
    createProduct('Sansevieria Moonshine', 2, 123, 'Sku8', 'images/plants/sansevieria_moonshine.png'),
    createProduct('Philodendron White Princess', 2, 123, 'Sku9', 'images/plants/philodendron_white_princess.jpeg'),
    createProduct('Stromanthe Sanguinea Triostar', 2, 123, 'Sku10', 'images/plants/stromanthe_sanguinea_triostar.png'),
    createProduct('Monstera Adansonii Swiss Cheese Vine', 2, 123, 'Sku11', 'images/plants/monstera_adansonii_swiss_cheese_vine.png'),
    createProduct('Alocasia Zebrinaa', 2, 123, 'Sku12', 'images/plants/alocasia_zebrina.jpeg'),
    createProduct('Chamedora', 2, 123, 'Sku13', 'images/plants/palm_chamedora.png'),
    createProduct("Epipremnum Aureum n'joy", 2, 123, 'Sku14', 'images/plants/epipremnum_aureum_njoy.png'),
    createProduct('Alocasia Stingray', 2, 123, 'Sku15', 'images/plants/alocasia_stingray.jpeg'),
    createProduct('Philodendron Silver Queen', 2, 123, 'Sku16', 'images/plants/philodendron_silver_queen.jpeg'),
    createProduct('Syngonium Noteon Robusta', 2, 123, 'Sku17','images/plants/syngonium_neon_robusta.jpeg'),
    createProduct('Alocasia Elephant Ears', 2, 123, 'Sku18', 'images/plants/alocasia_elephant_ears.jpeg'),
    createProduct('Ficus Lyrata', 2, 123, 'Sku19', 'images/plants/ficus_lyrata.jpeg'),
    createProduct('Pilea Peperomioides', 2, 123, 'Sku20', 'images/plants/pilea_peperomioides.jpeg')
];

const productList = document.querySelector('#main-products-list');

// Make html list with products
productList.innerHTML = productsArray.map(product =>
    `<li class="product">
        <div class="product__image" style="background-image:url('${product.Image}')">
          <div class="add-to-cart">
          <div class="add-to-cart">dodaj do koszyka</div></div>
        </div>
        <div class="product__details">
            <p class="product__sku">${product.Sku}</p>
            <h3 class="product__title">${product.Name}</h3>
            <input class="button-multi--inner" type="number" id="Quantity" name="quantity" value="1" min="1">
            <p class="product__qty">Qty: ${product.Qty}</p>
            <p class="product__price">$${product.Price}</p>
        </div>
    </li>`
).join('')
