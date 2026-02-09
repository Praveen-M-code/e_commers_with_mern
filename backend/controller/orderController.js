const orderModel = require('../models/orderModel')
exports.createOrder = async (req, res, next) => {
    console.log(req.body)
    await orderModel.create(req.body)
    res.json({
        success: true,
        message: "Create order"
    })
}