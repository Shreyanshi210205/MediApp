//radiobutton
const allRadioButtons = document.querySelectorAll(".radio");
const allContainer = document.querySelectorAll(".container");

allRadioButtons.forEach((radio) => {
  radio.addEventListener("click", function (e) {
    e.preventDefault();
    allContainer.forEach((container) => {
      if (container.getAttribute("id") === radio.getAttribute("id")) {
        container.style.display = "grid";
      } else {
        container.style.display = "none";
      }
    });
  });
});

let products = JSON.parse(localStorage.getItem("products")) || [];
let basket = JSON.parse(localStorage.getItem("cart")) || [];
let total = JSON.parse(localStorage.getItem("total"));

let summaryTotal = document.getElementById("summaryTotal");
let orderTotal = document.getElementById("orderTotal");

summaryTotal.innerText = total;
orderTotal.innerText = total;

let cartItems = document.querySelector(".cartItems");

basket.map((i) => {
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
  } = i;

  let div = document.createElement("div");
  div.setAttribute("class", "orderInfo");
  div.innerHTML = `<p>${productName} x ${item}</p>
                  <p>${productPrice}</p>`;
  cartItems.append(div);
});

let checkOutButton = document.getElementById("checkOutButton");
checkOutButton.addEventListener("click", async function () {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let product = cart[0].productName;
  let price = cart[0].productPrice;
  let items = {
    name: product,
    price: price,
  };
  // let url1 =
  //   "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/callPrescription";
  // let response1 = await fetch(
  //   "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/callPrescription",
  //   {
  //     method: "get",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     // body: JSON.stringify(items),
  //   }
  // );
  // //console.log(JSON.stringify(cart));
  // let url2 =
  //   "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/pdfGeneration";
  // let response = await fetch(
  //   "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/pdfGeneration",
  //   {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(items),
  //   }
  // );
  // let body = await response.json();
  // if (response.status === 200) {}
  // localStorage.setItem("response", JSON.stringify(body));
  location.href = "./success.html";
});
