const productsContainer = document.getElementById("productsContainer");
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      let response = await fetch("http://localhost:8080/api/getAllProducts");
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

//display products
class UI {
  displayProducts(products) {
    let result = ``;
    products.forEach((product) => {
      let {
        productId,
        productInfoOne,
        productInfoThree,
        productInfoTwo,
        productInfoUsageDetails,
        productName,
        productPictureFive,
        productPictureFour,
        productPictureMain,
        productPictureOne,
        productPictureThree,
        productPictureTwo,
        productPrice,
      } = product;

      result =
        result +
        `
      <article class="card">
          <figure>
            <img src="${productPictureMain}" alt="" />
          </figure>
          <div class="cardInfo">
            <div class="cardHeading">
              <h6>${productName}</h6>
            </div>
            <div class="cardPrice">
              <div class="prespcription">
                <i class="fa-solid fa-prescription-bottle-medical"></i>
                <p>Prescription required</p>
              </div>
              <div class="cardActualPrice">
                <span>$ ${productPrice}</span>
              </div>
              <div class="cardDelivery">
                <p>Get it in <span>1 Day</span></p>
              </div>
            </div>
            <div class="cardButtons">
              <a href="./Description.html">View Details</a>
              <div class="addToCart">
                <button type="button" class="addToCartButton" id="${productId}">
                  <div class="addToCartText">
                    <i class="fa-solid fa-plus"></i>
                    <span>Add</span>
                  </div>
                </button>
                <div class="counter" id="itemsCounter" data-id="${productId}">
                  <button type="button" id="decreaseItemButton"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="1" readonly class="itemQuantity"/>
                  <button type="button" id="increaseItemButton"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
        </article> 
      `;
    });
    productsContainer.innerHTML = result;
    return products;
  }

  getAddToCartButton() {
    const buttons = [...document.querySelectorAll(".addToCartButton")];

    buttons.forEach((button) => {
      this.showItemsCounter();
      let id = button.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        // button.style.display = "none";
        // itemsCounter.style.display = "grid";
      }
      button.addEventListener("click", (e) => {
        // button.style.display = "none";
        // itemsCounter.style.display = "grid";
        //get product from products
        let cartItem = {...Storage.getProduct(id), amount: 1};
        cart = [...cart, cartItem];
        console.log(cart);
        this.showItemsCounter();
        // add product to the cart
        // save cart in local storage
        Storage.saveCart(cart);
        // set cart values
        this.setCartValues(cart);
        // add cart item
        // display cart item
        // show the cart
      });
    });
  }

  setCartValues(cart){
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map(item => {
      tempTotal = item.productPrice * item.amount;
      itemsTotal = itemsTotal + item.amount;
      console.log(`product name: ${item.productName}`);
      console.log(`product Price: ${item.productPrice}`);
      console.log(`product qty: ${itemsTotal}`);
      console.log(`total: ${tempTotal.toFixed(2).toLowerCase().toString()}`)
    });
    
  }

  showItemsCounter(id) {
    let itemsCounterAll = document.querySelectorAll("#itemsCounter");
    itemsCounterAll.forEach(item => {
      console.log(item.datasource);
    })
  }
}

//local storage
class Storage {
  saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId.toString() === id) {
        return products[i];
      }
    }
  }
  static saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  const storage = new Storage();

  //get all products
  products
    .getProducts()
    .then((products) => {
      let productS = ui.displayProducts(products);
      return productS;
    })
    .then((products) => storage.saveProducts(products))
    .then(() => {
      ui.getAddToCartButton();
    });
});
