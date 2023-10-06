const express = require('express');
const productsRouter = express.Router();
const products = require('../data/product.json');



productsRouter.route('/1').get((req, res) => {
    res.render('product', 
        products,
    );
});
module.exports = productsRouter;