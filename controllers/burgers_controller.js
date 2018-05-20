
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index

//local.host8080/
router.get("/", function(req, res) {
 res.redirect("/burger");
 //local.host8080/burgers
});

router.get("/burger", function(req, res) {
  // console.log(res.body);
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    var templateData = {
      burgerData: burgerData
    };
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    // res.render("index", { burger_data: burgerData });
    res.render('index', templateData);
  });

});

router.post('/burger/create', function(req, res){
  console.log("post working");
  burger.create(req.body.burger_name, function(result){
    console.log("post result = " + result);
    res.redirect("/burger");
  })
})

router.put('/burger/update/:id', function(req, res) {
  console.log("look i am working");
  burger.update({devoured: true}, "id = " + req.params.id, function(result){
    // console.log("put result = " + result);
    res.status(200).end()
    console.log("Yahoo");
  })
})


module.exports = router;
