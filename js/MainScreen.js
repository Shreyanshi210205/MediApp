window.addEventListener("load", function () {
  this.localStorage.clear("cart");
  fetchDetails()
    .then((body) => {
      this.localStorage.setItem("products", JSON.stringify(body));
    })
    .then(
      () =>
        (products = [
          ...JSON.parse(this.localStorage.getItem("products")),
        ])
    )
    .then(() => console.log(products));
  this.localStorage.removeItem("cart");
});
let products = [];
let basket = JSON.parse(localStorage.getItem("cart")) || [];

// async function fetchDetails() {
//   let url = "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/getAllProducts"
//   let response = await fetch("http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/getAllProducts", {
//     method: 'get',
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });
//   let body = await response.json();

//   if (response.status == 200) {
//     showAllProducts(body);
//   }
//   return body;
// }
async function fetchDetails() {
  let url = "mock_data/products.json"; // Local JSON file
  let response = await fetch(url);
  // let body = await response.json();
  let body = [
    {
      productId: 101,
      productName: "Paracetamol 500mg",
      productPictureMain:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_1.png?raw=true",
      productPictureOne:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_5.png?raw=true",
      productPictureTwo:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_2.jpeg?raw=true",
      productPictureThree:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_3.png?raw=true",
      productPictureFour:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_4.png?raw=true",
      productPictureFive:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/para_1.png?raw=true",
      productPrice: "5.99",
      productInfoOne:
        "Used to reduce fever and relieve mild to moderate pain.",
      productInfoTwo:
        "Recommended dosage: 1-2 tablets every 4-6 hours.",
      productInfoThree: "Avoid alcohol while taking this medication.",
      productInfoUsageDetails:
        "Consult a doctor if symptoms persist beyond 3 days.",
    },
    {
      productId: 102,
      productName: "Ibuprofen 400mg",
      productPictureMain:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_4.png?raw=true",
      productPictureOne:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_1.png?raw=true",
      productPictureTwo:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_2.png?raw=true",
      productPictureThree:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_3.png?raw=true",
      productPictureFour:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_1.png?raw=true",
      productPictureFive:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/ibu_5.png?raw=true",
      productPrice: "7.99",
      productInfoOne:
        "Nonsteroidal anti-inflammatory drug (NSAID) used for pain relief.",
      productInfoTwo: "Recommended dosage: 1 tablet every 6-8 hours.",
      productInfoThree: "Do not exceed 3 tablets in 24 hours.",
      productInfoUsageDetails:
        "Take with food to avoid stomach irritation.",
    },
    {
      productId: 103,
      productName: "Amoxicillin 250mg",
      productPictureMain:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_1.png?raw=true",
      productPictureOne:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_1.png?raw=true",
      productPictureTwo:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_2.png?raw=true",
      productPictureThree:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_3.png?raw=true",
      productPictureFour:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_4.png?raw=true",
      productPictureFive:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/amo_5.png?raw=true",
      productPrice: "9.99",
      productInfoOne:
        "Antibiotic used to treat bacterial infections.",
      productInfoTwo: "Recommended dosage: 1 capsule every 8 hours.",
      productInfoThree: "Finish the full course as prescribed.",
      productInfoUsageDetails: "Take with or without food.",
    },
    {
      productId: 104,
      productName: "Cetirizine 10mg",
      productPictureMain:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_3.png?raw=true",
      productPictureOne:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_3.png?raw=true",
      productPictureTwo:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_1.png?raw=true",
      productPictureThree:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_2.png?raw=true",
      productPictureFour:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_4.png?raw=true",
      productPictureFive:
        "https://github.com/HarshMall28/online-medicine-web-app/blob/main/assets/img/cet_5.png?raw=true",
      productPrice: "4.99",
      productInfoOne:
        "Used for allergy relief, hay fever, and urticaria.",
      productInfoTwo: "Recommended dosage: 1 tablet daily.",
      productInfoThree: "May cause drowsiness in some individuals.",
      productInfoUsageDetails:
        "Avoid driving if drowsy after taking.",
    },
  ];

  // if (response.status == 200) {}
  showAllProducts(body);

  return body;
}

let showAllProducts = (products) => {
  return products.map((product) => {
    const productsContainer = document.getElementById(
      "productsContainer"
    );
    const singleProduct = document.createElement("article");
    singleProduct.classList.add("card");

    let {
      productId,
      productName,
      productPictureMain,
      productPictureOne,
      productPictureTwo,
      productPictureThree,
      productPictureFour,
      productPictureFive,
      productPrice,
      productInfoOne,
      productInfoTwo,
      productInfoThree,
      productInfoUsageDetails,
    } = product;

    singleProduct.innerHTML = `<figure>
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
                <span>EUR ${productPrice}</span>
              </div>
              <div class="cardDelivery">
                <p>Get it in <span>1 Day</span></p>
              </div>
            </div>
            <div class="cardButtons">
              <a style="cursor:pointer"id="${productId}" onclick="setValueLocalStorage(this)">View Details</a>
              <div class="addToCart">
                <button type="button" class="addToCartButton" onClick="addToCart(this)" id="${productId}">
                  <div class="addToCartText" >
                    <i class="fa-solid fa-plus"></i>
                    <span>Add</span>
                  </div>
                </button>
                <div class="counter" id="${productId}">
                  <button type="button" id="decreaseItemButton" onclick="decrease(this)"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="1" readonly class="itemQuantity"/>
                  <button type="button" id="increaseItemButton" onclick="increase(this)"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            </div>
          </div>`;

    productsContainer.append(singleProduct);
  });
};

async function addToCart(el) {
  let id = el.getAttribute("id");
  let notyf = new Notyf();
  let product = products.find(
    (item) => item.productId.toString() === id
  );
  let {
    productId,
    productName,
    productPictureMain,
    productPictureOne,
    productPictureTwo,
    productPictureThree,
    productPictureFour,
    productPictureFive,
    productPrice,
    productInfoOne,
    productInfoTwo,
    productInfoThree,
    productInfoUsageDetails,
  } = product;
  const counterAllContainer = document.querySelectorAll(".counter");
  counterAllContainer.forEach((element) => {
    if (element.getAttribute("id") === id) {
      checkCartTotalItems();
      element.style.display = "grid";
      el.style.display = "none";
      notyf.success("Items added to the cart");
      basket.push({
        productId,
        productName,
        productPictureMain,
        productPictureOne,
        productPictureTwo,
        productPictureThree,
        productPictureFour,
        productPictureFive,
        productPrice,
        productInfoOne,
        productInfoTwo,
        productInfoThree,
        productInfoUsageDetails,
        item: 1,
        sum: productPrice,
      });
      localStorage.setItem("cart", JSON.stringify(basket));
    }
  });
}

function checkCartTotalItems(el) {
  let cartItemsQuantity = document.getElementById(
    "cartItemsQuantity"
  );

  cartItemsQuantity.style.display = "grid";
  let count = cartItemsQuantity.innerText;
  if (count === "") {
    cartItemsQuantity.innerText = "1";
  } else {
    if (el === "inc") {
      count = parseInt(count) + 1;
      cartItemsQuantity.innerText = count.toString();
    } else if (el === "desc") {
      count = parseInt(count) - 1;
      cartItemsQuantity.innerText = count.toString();
    } else if (el === "zero") {
      count = parseInt(count) - 1;
      cartItemsQuantity.innerText = count.toString();
    } else {
      count = parseInt(count) + 1;
      cartItemsQuantity.innerText = count.toString();
    }
  }
}

async function increase(el) {
  let inputValue = el.previousElementSibling;
  let id = el.parentElement.id;
  let count = parseInt(inputValue.getAttribute("value"));
  count = count + 1;
  inputValue.setAttribute("value", count.toString());
  checkCartTotalItems("inc");
  let search = basket.find((x) => x.productId.toString() === id);
  search.item = count;
  search.sum = count * search.productPrice;
  localStorage.setItem("cart", JSON.stringify(basket));
}

async function decrease(el) {
  let inputValue = el.nextElementSibling;
  let count = parseInt(inputValue.getAttribute("value"));
  let notyf = new Notyf();
  let id = el.parentElement.id;
  count = count - 1;
  let search = basket.find((x) => x.productId.toString() === id);
  if (count < 1) {
    let addtocartDiv = el.parentElement.previousElementSibling;
    addtocartDiv.style.display = "grid";
    el.parentElement.style.display = "none";
    notyf.error("item Removed from the cart");
    checkCartTotalItems("zero");
    search.sum = count * search.sum;
    search.item = count;
    basket.pop(search);
    localStorage.setItem("cart", JSON.stringify(basket));
  } else {
    inputValue.setAttribute("value", count.toString());
    checkCartTotalItems("desc");
    search.item = count;
    search.sum = count * search.productPrice;
    localStorage.setItem("cart", JSON.stringify(basket));
  }
}

function setValueLocalStorage(el) {
  el.style.cursor = "pointer";
  // alert("setting value" + el.getAttribute("id"));
  localStorage.setItem("productId", el.getAttribute("id"));
  window.location = "./Description.html";
}

let bookAppointment = document.getElementById("bookapp");

bookAppointment.addEventListener("click", function () {
  location.href = "/appointment.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(
    ".navbarTwo .section .hamburger"
  );
  const navbarContent = document.querySelector(
    ".navbarTwo .section ul"
  );

  hamburgerMenu.addEventListener("click", function () {
    navbarContent.classList.toggle("active");
    if (navbarContent.classList.contains("active")) {
      hamburgerMenu.innerHTML = '<i class="fa-solid fa-times"></i>'; // Change to "X" icon
    } else {
      hamburgerMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to hamburger icon
    }
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !hamburgerMenu.contains(event.target) &&
      !navbarContent.contains(event.target)
    ) {
      navbarContent.classList.remove("active");
      hamburgerMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change back to hamburger icon
    }
  });
});
