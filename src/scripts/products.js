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
    createProduct('Strelitzia Nicolai', 19, 123, 'Sku1', 'images/plants/strelitzia_nicolai.jpeg'),
    createProduct('Alocasia Amazonian elephant ear', 42, 123, 'Sku2', 'images/plants/alocasia_amazonian_elephant_ear.jpeg'),
    createProduct('Ficus Elastica', 50, 123, 'Sku3', 'images/plants/ficus_elastica.png'),
    createProduct('Monstera deliciosa thai constellation', 36, 123, 'Sku4', 'images/plants/monstera_deliciosa_thai_constellation.jpeg'),
    createProduct('Ficus Tineke', 1, 123, 'Sku5', 'images/plants/ficus_tineke.jpeg'),
    createProduct('Senecio Rowleyanus String of pearls', 12, 123, 'Sku6', 'images/plants/senecio_rowleyanus_string_of_pearls.jpeg'),
    createProduct('Monstera Deliciosa', 22, 123, 'Sku7', 'images/plants/monstera_deliciosa.jpeg'),
    createProduct('Sansevieria Moonshine', 18, 123, 'Sku8', 'images/plants/sansevieria_moonshine.png'),
    createProduct('Philodendron White Princess', 12, 123, 'Sku9', 'images/plants/philodendron_white_princess.jpeg'),
    createProduct('Stromanthe Sanguinea Triostar', 6, 123, 'Sku10', 'images/plants/stromanthe_sanguinea_triostar.png'),
    createProduct('Monstera Adansonii Swiss Cheese Vine', 14, 123, 'Sku11', 'images/plants/monstera_adansonii_swiss_cheese_vine.png'),
    createProduct('Alocasia Zebrinaa', 40, 123, 'Sku12', 'images/plants/alocasia_zebrina.jpeg'),
    createProduct('Chamedora', 8, 123, 'Sku13', 'images/plants/palm_chamedora.png'),
    createProduct("Epipremnum Aureum n'joy", 10, 123, 'Sku14', 'images/plants/epipremnum_aureum_njoy.png'),
    createProduct('Alocasia Stingray', 42, 123, 'Sku15', 'images/plants/alocasia_stingray.jpeg'),
    createProduct('Philodendron Silver Queen', 32, 123, 'Sku16', 'images/plants/philodendron_silver_queen.jpeg'),
    createProduct('Syngonium Noteon Robusta', 23, 123, 'Sku17','images/plants/syngonium_neon_robusta.jpeg'),
    createProduct('Ficus Lyrata', 17, 123, 'Sku18', 'images/plants/ficus_lyrata.jpeg'),
    createProduct('Pilea Peperomioides', 5, 123, 'Sku19', 'images/plants/pilea_peperomioides.jpeg')
];

const productList = document.querySelector('#main-products-list');

// Make html list with products
  productList.innerHTML = productsArray.map(product =>
      `<li class="product">
          <div class="product__image" style="background-image:url('${product.Image}')">
            <div data="${product.Name}" class="add-to-cart">dodaj do koszyka</div>
            <button class="remove-from-cart">usun</button>
            </div>
          <div class="product__details">
              <p class="product__sku">${product.Sku}</p>
              <h3 class="product__title">${product.Name}</h3>
              <p class="product__qty">Qty: ${product.Qty}</p>
              <p class="product__price">$${product.Price}</p>
          </div>
      </li>`
  ).join('')
