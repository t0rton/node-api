var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

// Routes
Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');

module.exports = router;