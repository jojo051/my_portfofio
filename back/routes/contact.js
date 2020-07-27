const express = require('express');
const router = express.Router();
// nodemailer
const nodemailer = require("nodemailer");
/* GET home page. */

// Création de la méthode de transport de l'email 
const smtpTransport = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    service: "Yahoo",
    auth: {
        user: "jojo@yahoo.fr",
        pass: "azerty"
    }
});

router.get('/', function(req, res, next) {
  const mailData =req.body
  res.send("en cour d'envoie");
  smtpTransport.sendMail({
    from: "Jojo <jojo@yahoo.fr>", // Expediteur
    to: mailData.userMail , // Destinataires
    subject: "envoie depuis mailData.mail", // Sujet
    text: mailData.message, // plaintext body
    html: "<b>Hello world ✔</b>" // html body
  }, (error, response) => {
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
  });
});

module.exports = router;