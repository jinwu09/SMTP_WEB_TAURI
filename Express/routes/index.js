const { json } = require("express");
var express = require("express");
const nodemailer = require("nodemailer");
var router = express.Router();

var hello = {
  h1: "hi there",
  h2: {
    hi: "hi",
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(JSON.stringify(hello.h1 + hello.h2.hi));
  // res.send(JSON.stringify(hello));
  // res.render("index", { title: "hello" });
});
router.get("/hello", function (req, res, next) {
  res.send(JSON.stringify(hello));
});
router.post("/sendmail", function (req, res) {
  let content = req.body;

  let transporter = nodemailer.createTransport({
    host: content.account.host,
    port: content.account.port,
    secure: content.account.secure,
    auth: {
      user: content.account.auth.user,
      pass: content.account.auth.pass,
    },
  });
  let info = transporter.sendMail({
    from: content.send.from,
    to: content.send.to,
    subject: content.send.subject,
    text: content.send.text,
    html: content.send.html,
  });
  let status = {
    code: 200,
    messageid: info.messageid,
    content: content,
  };
  res.status(status.code).json({ status });
  // res.sendStatus(200);
});
module.exports = router;
