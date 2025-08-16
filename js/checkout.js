window.addEventListener("load", function () {
  showCartItems();
});

let products = JSON.parse(localStorage.getItem("products")) || [];
let basket = JSON.parse(localStorage.getItem("cart")) || [];

function showCartItems() {
  let itemTotal = document.getElementById("itemTotal");
  let orderTotal = document.getElementById("orderTotal");
  let itemSum = 0;
  let cartItemCardContainer = document.querySelector(
    ".cartItemCardContainer"
  );
  basket.map((singleItem) => {
    console.log(singleItem);
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
      item,
      sum,
    } = singleItem;
    itemSum = (parseFloat(itemSum) + parseFloat(sum)).toString();
    console.log(itemSum);
    itemTotal.innerText = `EUR ${itemSum}`;
    orderTotal.innerText = `EUR ${itemSum}`;
    localStorage.setItem("total", JSON.stringify(itemSum));
    let cardItemCard = document.createElement("div");
    cardItemCard.setAttribute("class", "cardItemCard");
    cardItemCard.innerHTML = `<figure>
                  <img
                    src="${productPictureMain}"
                    alt=""
                  />
                </figure>
                <div class="cardItemInfo">
                  <div class="firstInfo">
                    <div class="firstInfoOne">
                      <h6>
                        <i class="fa-solid fa-notes-medical"></i
                        ><span>${productName}</span>
                      </h6>
                      <span id="singleItemPrice">EUR ${productPrice}</span>
                    </div>
                    <div class="firstInfoTwo">
                      <h6>Qty: <span>${item}</span></h6>
                      <span class="totalprice">EUR ${sum}</span>
                    </div>
                  </div>
                  <div class="extraOption">
                    <button type="button">Remove</button>
                    <button type="button">Save for later</button>
                  </div>
                </div>`;
    cartItemCardContainer.append(cardItemCard);
  });
}
const actualBtn = document.getElementById("actual-btn1");
const fileChosen = document.getElementById("file-chosen");

actualBtn.addEventListener("change", function () {
  fileChosen.innerHTML = this.files[0].name;
});

let proceedToCheckoutButton = document.getElementById(
  "proceedToCheckoutButton"
);

proceedToCheckoutButton.addEventListener("click", function () {
  alert("Redirecting to our payment gateway");
  location.href = "/Redirect.html";
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
