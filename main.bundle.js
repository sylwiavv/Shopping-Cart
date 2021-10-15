"use strict";var createProduct=function(t,e,a,r,n){return{Name:t,Qty:e,Price:a,Sku:r,Image:n}},productsArray=[createProduct("Strelitzia Nicolai",1,30,"Sku1","images/plants/strelitzia_nicolai.jpeg"),createProduct("Alocasia Amazonian elephant ear",1,"12,67","Sku2","images/plants/alocasia_amazonian_elephant_ear.jpeg"),createProduct("Ficus Elastica",1,76,"Sku3","images/plants/ficus_elastica.png"),createProduct("Monstera deliciosa thai constellation",1,73,"Sku4","images/plants/monstera_deliciosa_thai_constellation.jpeg"),createProduct("Ficus Tineke",1,10,"Sku5","images/plants/ficus_tineke.jpeg"),createProduct("Senecio Rowleyanus String of pearls",1,45,"Sku6","images/plants/senecio_rowleyanus_string_of_pearls.jpeg"),createProduct("Monstera Deliciosa",1,34,"Sku7","images/plants/monstera_deliciosa.jpeg"),createProduct("Sansevieria Moonshine",1,65,"Sku8","images/plants/sansevieria_moonshine.png"),createProduct("Philodendron White Princess",1,4,"Sku9","images/plants/philodendron_white_princess.jpeg"),createProduct("Stromanthe Sanguinea Triostar",1,65,"Sku10","images/plants/stromanthe_sanguinea_triostar.png"),createProduct("Monstera Adansonii Swiss Cheese Vine",1,32,"Sku11","images/plants/monstera_adansonii_swiss_cheese_vine.png"),createProduct("Alocasia Zebrinaa",1,16,"Sku12","images/plants/alocasia_zebrina.jpeg"),createProduct("Chamedora",1,123,"Sku13","images/plants/palm_chamedora.png"),createProduct("Epipremnum Aureum n'joy",1,100,"Sku14","images/plants/epipremnum_aureum_njoy.png"),createProduct("Alocasia Stingray",1,106,"Sku15","images/plants/alocasia_stingray.jpeg"),createProduct("Philodendron Silver Queen",1,19,"Sku16","images/plants/philodendron_silver_queen.jpeg"),createProduct("Syngonium Noteon Robusta",1,60,"Sku17","images/plants/syngonium_neon_robusta.jpeg"),createProduct("Ficus Lyrata",1,64,"Sku18","images/plants/ficus_lyrata.jpeg"),createProduct("Pilea Peperomioides",1,54,"Sku19","images/plants/pilea_peperomioides.jpeg")],producstList=document.querySelector("#main-products-list"),cartProductsList=document.querySelector("#main-products-cart-list"),renderProducts=function(t,e){t.innerHTML=e.map(function(t){return'<li data-product-id="'.concat(t.Sku,'" class="product">\n          <div class="product__image-container">\n            <img src="').concat(t.Image,'" alt="').concat(t.Name,'">\n            <div class="product-actions">\n              <div data="').concat(t.Name,'" class="add-to-cart"></div>\n              <div class="before-add-to-cart"></div>\n            </div>\n          </div>\n          <div class="product-information">\n            <p class="product-information__sku">').concat(t.Sku,'</p>\n            <p class="product-information__title">').concat(t.Name,'</p>\n            <div class="product-information__to-cart">\n            <form>\n            <label class="label" for="qty"><span>Ilość</span></label>\n              <input class="product-information__qty" name="qty" type="number" value="').concat(t.Qty,'">\n            </form>\n              <p class="product-information__price">$').concat(t.Price,"</p>\n            </div>\n          </div>\n      </li>")}).join("")},renderCartProducts=function(t){cartProductsList.innerHTML=t.map(function(t){return'<li data-product-id="'.concat(t.Sku,'" class="product">\n          <div class="product__image-container">\n            <img src="').concat(t.Image,'" alt="').concat(t.Name,'">\n          </div>\n          <div class="product-information">\n            <p class="product-information__sku">').concat(t.Sku,'</p>\n            <p class="product-information__title">').concat(t.Name,'</p>\n            <div class="product-information__to-cart">\n              <label class="label" for="qty"><span>Ilość</span></label>\n              <form>\n                <div class="value-button decrease" value="Decrease Value">-</div>\n                <input class="product-information__qty cart_qty" name="qty" type="number" value="').concat(t.Qty,'">\n                <div class="value-button increase" value="Increase Value">+</div>\n              </form>\n              <p class="product-information__price">$').concat(t.Price,'</p>\n            </div>\n          </div>\n\n          <div class="product-actions">\n            <div data="').concat(t.Name,'" class="remove-from-cart"></div>\n          </div>\n      </li>')}).join("")};renderProducts(producstList,productsArray);var body=document.body,addToCartButtons=document.querySelectorAll(".add-to-cart"),productList=document.querySelectorAll(".products-list-container"),cartArray=[];addToCartButtons.forEach(function(t){t.addEventListener("click",function(t){var e=t.target.parentElement.parentElement.parentElement,a=e.dataset.productId,t=e.querySelector(".product-information__qty").value,t=parseInt(t);(isNaN(t)||t<=0||"string"==typeof t)&&(t=1);e=cartArray.filter(function(t){return t.Id===a});e.length?e[0].Qty=t+e[0].Qty:cartArray.push({Id:a,Qty:t}),renderCart(),updateQtyValueInCart(),updateNumberInCart()})});var renderCart=function(){var t=cartArray.map(function(e){var t=productsArray.filter(function(t){return e.Id===t.Sku})[0];return t.Qty=e.Qty,t});renderCartProducts(t),removeCartProduct(),totalCartPrice(),document.querySelectorAll(".cart_qty").forEach(function(t){t.disabled=!0})},removeCartProduct=function(){document.querySelectorAll(".remove-from-cart").forEach(function(r){r.addEventListener("click",function(t){var e=r.parentElement.parentElement.dataset.productId,a=cartArray.find(function(t){return t.Id===e}),a=cartArray.indexOf(a);cartArray.splice(a,1),updateNumberInCart(),renderCart()})})},updateNumberInCart=function(){var t=document.querySelector("#cart-product-number"),e=document.querySelector(".cart-information");t.innerHTML=cartArray.length;e.innerHTML=0==cartArray.length?"Twój koszyk jest pusty":"",0==cartArray.length?e.classList.add("empty"):e.classList.remove("empty")},totalCartPrice=function(){var t=document.querySelectorAll("#main-products-cart-list > .product");if(t.length){for(var e=0,a=0;a<t.length;a++){var r=t[a],n=r.querySelectorAll(".product-information__price")[0],n=parseFloat(n.innerText.replace("$","")),r=r.querySelectorAll(".product-information__qty")[0].value;e+=n*(r=parseInt(r,10))}document.querySelectorAll("#total-price")[0].innerHTML="$"+e}else 0===t.length&&(document.querySelectorAll("#total-price")[0].innerHTML="$0")},parent=document.querySelector(".minicart-wrapper"),child=document.querySelector("#cart-list"),closeMinicartBtn=document.querySelector("#close-minicart");parent.addEventListener("click",function(t){t.target!==t.currentTarget?child.classList.add("active"):(parent.classList.toggle("active"),body.classList.toggle("not-scroll"))}),body.addEventListener("click",function(t){t.target==t.currentTarget&&body.classList.contains("not-scroll")&&(body.classList.remove("not-scroll"),parent.classList.remove("active"))}),closeMinicartBtn.addEventListener("click",function(t){t.target==t.currentTarget&&body.classList.contains("not-scroll")&&(body.classList.remove("not-scroll"),parent.classList.remove("active"))});var updateCartProductQty=function(e,t){cartArray.filter(function(t){return t.Id===e})[0].Qty=t},updateQtyValueInCart=function(){var t=document.querySelectorAll(".increase"),e=document.querySelectorAll(".decrease");t.forEach(function(t){t.addEventListener("click",function(t){var e=event.target,a=t.target.parentNode.querySelector(".cart_qty");console.log(a);e=e.parentElement.parentElement.parentElement.parentElement.dataset.productId,a=parseInt(a.value,10);a=isNaN(a)?0:a,a++,t.target.parentNode.querySelector(".cart_qty").value=a,totalCartPrice(),updateCartProductQty(e,a)})}),e.forEach(function(t){t.addEventListener("click",function(t){var e=event.target,a=t.target.parentNode.querySelector(".cart_qty"),e=e.parentElement.parentElement.parentElement.parentElement.dataset.productId,a=parseInt(a.value,10);(a=isNaN(a)?0:a)<1&&(a=1),a--,t.target.parentNode.querySelector(".cart_qty").value=a,totalCartPrice(),updateCartProductQty(e,a)})})};