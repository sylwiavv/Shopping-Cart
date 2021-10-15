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
    createProduct('Strelitzia Nicolai', 1, 30, 'Sku1', 'images/plants/strelitzia_nicolai.jpeg'),
    createProduct('Alocasia Amazonian elephant ear',1, '12,67', 'Sku2', 'images/plants/alocasia_amazonian_elephant_ear.jpeg'),
    createProduct('Ficus Elastica', 1, 76, 'Sku3', 'images/plants/ficus_elastica.png'),
    createProduct('Monstera deliciosa thai constellation', 1, 73, 'Sku4', 'images/plants/monstera_deliciosa_thai_constellation.jpeg'),
    createProduct('Ficus Tineke', 1, 10, 'Sku5', 'images/plants/ficus_tineke.jpeg'),
    createProduct('Senecio Rowleyanus String of pearls', 1, 45, 'Sku6', 'images/plants/senecio_rowleyanus_string_of_pearls.jpeg'),
    createProduct('Monstera Deliciosa', 1, 34, 'Sku7', 'images/plants/monstera_deliciosa.jpeg'),
    createProduct('Sansevieria Moonshine', 1, 65, 'Sku8', 'images/plants/sansevieria_moonshine.png'),
    createProduct('Philodendron White Princess', 1, 4, 'Sku9', 'images/plants/philodendron_white_princess.jpeg'),
    createProduct('Stromanthe Sanguinea Triostar',1, 65, 'Sku10', 'images/plants/stromanthe_sanguinea_triostar.png'),
    createProduct('Monstera Adansonii Swiss Cheese Vine', 1, 32, 'Sku11', 'images/plants/monstera_adansonii_swiss_cheese_vine.png'),
    createProduct('Alocasia Zebrinaa', 1, 16, 'Sku12', 'images/plants/alocasia_zebrina.jpeg'),
    createProduct('Chamedora',1, 123, 'Sku13', 'images/plants/palm_chamedora.png'),
    createProduct("Epipremnum Aureum n'joy", 1, 100, 'Sku14', 'images/plants/epipremnum_aureum_njoy.png'),
    createProduct('Alocasia Stingray', 1, 106, 'Sku15', 'images/plants/alocasia_stingray.jpeg'),
    createProduct('Philodendron Silver Queen', 1, 19, 'Sku16', 'images/plants/philodendron_silver_queen.jpeg'),
    createProduct('Syngonium Noteon Robusta', 1, 60, 'Sku17','images/plants/syngonium_neon_robusta.jpeg'),
    createProduct('Ficus Lyrata', 1, 64, 'Sku18', 'images/plants/ficus_lyrata.jpeg'),
    createProduct('Pilea Peperomioides',1, 54, 'Sku19', 'images/plants/pilea_peperomioides.jpeg')
];

// Make html list with products
const producstList = document.querySelector('#main-products-list');
const cartProductsList = document.querySelector('#main-products-cart-list');

const renderProducts = (container, products) => {
  container.innerHTML = products.map(product =>
      `<li data-product-id="${product.Sku}" class="product">
          <div class="product__image-container">
            <img src="${product.Image}" alt="${product.Name}">
            <div class="product-actions">
              <div data="${product.Name}" class="add-to-cart"></div>
              <div class="before-add-to-cart"></div>
            </div>
          </div>
          <div class="product-information">
            <p class="product-information__sku">${product.Sku}</p>
            <p class="product-information__title">${product.Name}</p>
            <div class="product-information__to-cart">
            <form>
            <label class="label" for="qty"><span>Ilość</span></label>
              <input class="product-information__qty" name="qty" type="number" value="${product.Qty}">
            </form>
              <p class="product-information__price">$${product.Price}</p>
            </div>
          </div>
      </li>`
  ).join('')
}

const renderCartProducts = (products) => {
  cartProductsList.innerHTML = products.map(product =>
      `<li data-product-id="${product.Sku}" class="product">
          <div class="product__image-container">
            <img src="${product.Image}" alt="${product.Name}">
          </div>
          <div class="product-information">
            <p class="product-information__sku">${product.Sku}</p>
            <p class="product-information__title">${product.Name}</p>
            <div class="product-information__to-cart">
              <label class="label" for="qty"><span>Ilość</span></label>
              <form>
                <div class="value-button decrease" value="Decrease Value">-</div>
                <input class="product-information__qty cart_qty" name="qty" type="number" value="${product.Qty}">
                <div class="value-button increase" value="Increase Value">+</div>
              </form>
              <p class="product-information__price">$${product.Price}</p>
            </div>
          </div>

          <div class="product-actions">
            <div data="${product.Name}" class="remove-from-cart"></div>
          </div>
      </li>`
  ).join('')
}
renderProducts(producstList, productsArray);
