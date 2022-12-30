const express = require("express");
const bodyParser = require("body-parser");
const { send } = require("@sendgrid/mail");

const app = express();
app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  send({
    to: "Admin@kickto.app",
    from: req.body.email,
    subject: "New form submission",
    text: req.body.message,
  })
    .then(() => {
      res.json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    });
});

app.listen(3000, () => console.log("Server listening on port 3000"));
