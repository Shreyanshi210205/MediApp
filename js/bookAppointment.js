let formID = document.getElementById("formID");

formID.addEventListener("submit", async function (e) {
  e.preventDefault();
  let formdata = new FormData(this);
  let json = Object.fromEntries(formdata); //this will give in json format just to check in console
  console.log(json);
  localStorage.setItem("response", JSON.stringify(json));
  let data = {
    method: "post",
    id: "121",
    patient_name: json.patientName,
    email: json.email,
    reason: json.reason,
    doctor_assigned: json.doctorName,
    date: json.date,
    time: json.time,
  };
  // try {
  //   let url = "http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/appointment";
  //   let response = await fetch("http://demo-env.eba-uqr6mfaq.us-east-1.elasticbeanstalk.com/api/appointment", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   let body = response.json();
  // if (response.ok) {
  // let appointmentStatus = document.getElementById("appointmentStatusN");
  // appointmentStatus.value = "Appointment scheduled successfully";
  setTimeout(function () {
    location.href = "/successNew.html";
  }, 1200);

  // } else {
  // alert("failed to create appointment");
  // }
  // } catch (e) {
  //   console.log(e);
  // }
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
