var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgersObject = {
            burgers: data
        };
       
        res.render("index", burgersObject);
    });
}); 

router.post("/api/burgers", function(req, res) {
    console.log(req.body, "----------- This should be the burger");
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({burger_name: result.burger_name});
    });
});

router.put("/api/burgers/:burger_name", function(req, res) {
    burger.update(["burger_name", "devoured"], [req.params.burger_name, req.params.devoured], function(result) {
        res.json({burger_name: result.burger_name, devoured: result.devoured});
    });
});

module.exports = router;