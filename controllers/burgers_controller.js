var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(burger_data) {
      console.log(burger_data);
      res.render("index", {burger_data});
    })
  })
  
router.put("/burgers/update", function(req, res) {
    let burgertoUpdate = req.body.burger_id
    burger.update(burgertoUpdate, function(result) {
    res.redirect("/");
    })
  })
  
  router.post("/burgers/create", function(req, res) {
    let burgertoCreate = req.body.burger;
    burger.create(burgertoCreate, function(result) {
    res.redirect("/");
    })
  })

  module.exports = router;
