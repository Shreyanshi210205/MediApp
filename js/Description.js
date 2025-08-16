let infoSection = document.querySelector(
  ".descriptionMainContainer .section"
);
let cartItemsQuantity = document.getElementById("cartItemsQuantity");
let cart = [];
window.addEventListener("load", () => {
  showProduct()
    .then(() => {
      let cartItems = getTotalCartItem();
      return cartItems;
    })
    .then((body) => showcart(body));
});

function showcart(cartItems) {
  let count = 0;
  cartItems.map((item) => {
    count = count + 1;
  });

  if (count === 0) {
    cartItemsQuantity.style.display = "none";
  } else {
    cartItemsQuantity.style.display = "grid";
    cartItemsQuantity.innerText = count;
  }
}

async function getTotalCartItem() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
}

async function showProduct() {
  let id = JSON.parse(localStorage.getItem("productId"));
  let product = JSON.parse(localStorage.getItem("products"));
  let selectedProduct = product.filter(
    (item) => item.productId == id
  );
  let {
    productId,
    productName,
    productPrice,
    productPictureMain,
    productPictureOne,
    productPictureTwo,
    productPictureThree,
    productPictureFour,
    productPictureFive,
    productInfoOne,
    productInfoTwo,
    productInfoThree,
    productInfoUsageDetails,
  } = selectedProduct[0];

  let leftSection = `<article class="leftSection">
          <figure>
            <img
              src="${productPictureMain}"
              alt="medicine-main-image"
            />
           </figure> 
          <div class="pictureRoll">
            <figure>
              <img
                src="${productPictureOne}"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="${productPictureTwo}"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="${productPictureThree}"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="${productPictureFour}"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="${productPictureFive}"
                alt=""
              />
            </figure>
            <figure>
              <img
                src="${productPictureTwo}"
                alt=""
              />
            </figure>
          </div>
        </article>`;

  let rightSection = `<article class="rightSection">
          <div class="medicineheading">
            <h1>
              <i class="fa-solid fa-prescription-bottle"></i
              ><span>${productName}</span>
            </h1>
            <span id="price">EUR ${productPrice}</span>
            <p>Get it in<span> 1 Day</span></p>
          </div>
          
          <div class="medicineInfo">
            <div class="infoOne">
              <h4>ABOUT THE PRODUCT</h4>
              <p>
                ${productInfoOne} 
                <br><br>
                ${productInfoTwo} 
                <br><br>
                ${productInfoThree} 
              </p>
            </div>
            <div class="infoTwo">
              <h4>USAGE DETAILS</h4>
              <p>
                ${productInfoUsageDetails}
              </p>
            </div>
          </div>
          
        </article>`;

  infoSection.innerHTML = leftSection + rightSection;
}

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
