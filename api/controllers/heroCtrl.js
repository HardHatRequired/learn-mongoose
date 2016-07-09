var mongoose = require('mongoose');
var express = require('express');
var Hero = require('../models/heroModel.js')


module.exports = {
    read: function(req, res) {

    },
    create: function(req, res) {
        var newHero = new Hero(req.body);
        newHero.save(function(err, result) {
            if(err) return res.status(500).send(err);
            else res.send(result)
        })
    }
}