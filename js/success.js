window.addEventListener("load", () => {});

// let respose = JSON.parse(localStorage.getItem("response"));
let mainContainer = document.getElementById("mainContainer");

let div = document.createElement("div");
div.innerHTML = `<h2 style="font-size: 1rem !important">Thank you for ordering with us. Your order has been placed and an invoice has been sent to you on your registered email address.</h2>`;
mainContainer.append(div);

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
