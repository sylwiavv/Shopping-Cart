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
    createProduct('Strelitzia Nicolai', 2, 30, 'Sku1', 'images/plants/strelitzia_nicolai.jpeg'),
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

const productList = document.querySelector('#main-products-list');

// Make html list with products
// const renderProducts = () => {
  productList.innerHTML = productsArray.map(product =>
      `<li data-product-id="${product.Sku}" class="product">
          <div class="product__image" style="background-image:url('${product.Image}')">
            <div class="add-to-cart">dodaj do koszyka</div>
            <button class="remove-from-cart">usun</button>
          </div>
          <div class="product__details">
              <p class="product__sku">${product.Sku}</p>
              <h3 class="product__title">${product.Name}</h3>
              <input class="product__qty" type="number" value="${product.Qty}">
              <p class="product__price">$${product.Price}</p>
          </div>
      </li>`
  ).join('')
// }

const renderProducts = (container, products) => {
  container.innerHTML = products.map(product =>
      `<li data-product-id="${product.Sku}" class="product">
          <div class="product__image" style="background-image:url('${product.Image}')">
            <div data="${product.Name}" class="add-to-cart">dodaj do koszyka</div>
            <button data="${product.Name}" class="remove-from-cart">usun</button>
            </div>
          <div class="product__details">
              <p class="product__sku">${product.Sku}</p>
              <h3 class="product__title">${product.Name}</h3>
              <input class="product__qty" type="number" value="${product.Qty}">
              <p class="product__price">$${product.Price}</p>
          </div>
      </li>`
  ).join('')
}
