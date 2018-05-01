var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var User = require('../models/users')

router.get('/', function(req, res, next) {
  Workout.find(function (err, workouts) {
    if (err) return console.error(err);
    res.json(workouts);
  })  
});

router.post('/login', function(req, res, next) {
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;

    var newuser =  new User();
    newuser.email = email;
    newuser.username = username;
    newuser.password = password;
    newuser.save(function(err, savedUser) {
        if(err) {
            console.log(err);
            retur res.status(500).send();
        }
    }

});

module.exports = router;
