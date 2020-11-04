const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

app.use(
  (settingDate = (req, res, next) => {
    let date = new Date();
    let day = date.toDateString().substr(0, 3);
    let the = date.toDateString().substr(8, 2);
    let month = date.toDateString().substr(4, 4);
    let hour = date.toTimeString().substr(0, 2);
    let time = date.toTimeString().substr(0, 5);
    let opening = false;
    switch (day) {
      case "Mon":

      case "Tue":

      case "Wed":

      case "Thu":

      case "Fri":
        opening = true;
    }
    if (opening === true && hour <= 17 && hour >= 9) {
      next();
    } else
      res.send(
        `This website is unavailable  ${day} at ${time} (off working time),We are on from Monday to friday between 9am and 5pm`
      );
  })
);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

const port = 5000;
app.listen(port, (error) => {
  error
    ? console.log("Connection lost.")
    : console.log(`Server running on port ${port}`);
});
