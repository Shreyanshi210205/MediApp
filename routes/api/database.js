const express = require("express");
const router = express.Router();
const path = require("path");
const mysql = require("mysql");
const util = require("util");
const fs = require("fs");
const https = require("https");
const http = require("http");
const FormData = require("form-data");
const form = new FormData();
var connection = mysql.createConnection({
  host: "myproject-instance-1.choaw1yxrkyh.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "mydb_app",
  port: 3306,
});

// connection.connect((err) => {
//     if (err) {
//       console.log("Error occurred", err);
//     } else {
//       console.log("Connected to database");
//       var sql = "SELECT * FROM Products";
//       connection.query(sql, function (err, result) {
//         if (err) {
//           console.log(err);
//         }
//         console.log("New table created");
//       });
//     }
// });
router.route("/getAllProducts").get((req, res) => {
  console.log("Connected to database");
  var sql = "SELECT * FROM ProductsEntity";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    res.json(result);
    //connection.end();
    console.log("New table created");
  });
});

router.route("/pdfGeneration").post(async (req, res) => {
  console.log(`post/${util.inspect(req.body, false, null)}`);
  // console.log("Connected to database. the resp is: " + req.body.name);
  // res.json({
  //   url: req.body.price,
  // });
  let data = {
    data: {
      name: req.body.name,
      price: req.body.price,
      date: "today",
      success: "successful",
    },
  };
  const result = await post(
    "https://raq06bxfrk.execute-api.eu-west-1.amazonaws.com/apiqrcode",
    data
  );
  console.log(result);
  let data2 = {
    name: "newInvaice",
    image: JSON.parse(result),
  };
  let newUrl =
    "https://newharshbucket.s3.eu-west-1.amazonaws.com/newInvoice.pdf";
  console.log(JSON.stringify(data2));
  const url = await post(
    "https://g3fywtdvwa.execute-api.eu-west-1.amazonaws.com/stage1",
    data2
  );
  console.log(JSON.parse(url).url);
  let message =
    "Dear Customer, your order for " +
    req.body.name +
    " has been placed successfully. Your bill is " +
    req.body.price +
    " .Here is the link for your invoce. You can scan the QR Code for details " +
    newUrl;
  let data3 = {
    "from-email": "vikrantsonawane2@gmail.com",
    "from-name": "medibuddy",
    subject: "Medicine Order Successfully",
    "text-part": message,
    recipients: [{ Email: "contact.harshmall2@gmail.com" }],
  };
  const email = await post2(
    "https://d6hv1f8eaf.execute-api.us-east-1.amazonaws.com/scp-project/sendmail",
    data3
  );
  console.log(email);
  res.json({
    url1: JSON.parse(url).url,
    url: newUrl,
  });
});

router.route("/appointment").post(async (req, res) => {
  let data = req.body;
  //console.log("data from req.body: " + data);
  // data =  {
  //   method : "post",
  //   id: "121",
  //   patient_name : json.patientName,
  //   email : json.email,
  //   reason: json.reason,
  //   doctor_assigned: json.doctorName,
  //   date : json.date,
  //   time : json.time
  // }
  let message =
    "Dear " +
    data.patient_name +
    ", your appointment with  " +
    data.doctor_assigned +
    " has been scheduled for " +
    data.date +
    " and time: " +
    data.time +
    ". Kindly reach there on time.";
  let data1 = {
    "from-email": "vikrantsonawane2@gmail.com",
    "from-name": "medibuddy",
    subject: "Medibuddy: Appointment Scheduled",
    "text-part": message,
    recipients: [{ Email: "contact.harshmall2@gmail.com" }],
  };
  const email = await post2(
    "https://d6hv1f8eaf.execute-api.us-east-1.amazonaws.com/scp-project/sendmail",
    data1
  );
  console.log(email);
  res.json({
    email: email,
  });
});

router.route("/callPrescription").get( (req, res) => {
  //path.resolve(__dirname, "../public/prescription.png")
  //fs.createReadStream("./prescription.png")
  setTimeout(async function () {
    const file =
      "https://bucketfortest010695.s3.amazonaws.com/prescription.jpg";
    let message =
      "Dear customer, your prescription has been verified and approved. Here is your approved document: " +
      file;
    let data1 = {
      "from-email": "vikrantsonawane2@gmail.com",
      "from-name": "medibuddy",
      subject: "Medibuddy: Prescription Approved",
      "text-part": message,
      recipients: [{ Email: "contact.harshmall2@gmail.com" }],
    };
    const email = await post2(
      "https://d6hv1f8eaf.execute-api.us-east-1.amazonaws.com/scp-project/sendmail",
      data1
    );
    console.log(email);
    res.json({
      email: email,
    });
  }, 3000);
});

async function post(url, data) {
  const dataString = JSON.stringify(data);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // timeout: 1000, // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      // if (res.statusCode < 200 || res.statusCode > 299) {
      //   return reject(new Error(`HTTP status code ${res.statusCode}`))
      // }
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request time out"));
    });

    req.write(dataString);
    req.end();
  });
}

async function post2(url, data) {
  const dataString = JSON.stringify(data);
  const options = {
    method: "POST",
    // timeout: 1000, // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      // if (res.statusCode < 200 || res.statusCode > 299) {
      //   return reject(new Error(`HTTP status code ${res.statusCode}`))
      // }
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request time out"));
    });

    req.write(dataString);
    req.end();
  });
}

module.exports = router;
