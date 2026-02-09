const productModel = require("../models/productModel")


exports.getProducts = async (req, res, next) => {
    const products = await productModel.find({})
    res.json({
        success: true,
        products
    })
}
//get single product api = /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    console.log(req.params.id)
    try {
        const product = await productModel.findById(req.params.id)
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}