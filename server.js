var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var controller = require("./controllers/burgers_controller.js");

app.use(controller);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});


