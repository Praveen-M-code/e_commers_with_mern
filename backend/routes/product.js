const express = require('express');
const { getProducts, getSingleProduct } = require('../controller/productController');
const router = express.Router();

router.route('/products').get(getProducts);

router.route('/singleproduct/:id').get(getSingleProduct);

module.exports = router;