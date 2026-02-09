const orderModel = require('../models/orderModel')
exports.createOrder = async (req, res, next) => {

    const cartItems = req.body;
    const amount = Number(cartItems.reduce((acc,items)=>(
        acc+items.product.price * items.quality
    ),0)).toFixed(2);
    const status = "pending";

    console.log(cartItems)

    const order = await orderModel.create({cartItems,amount,status});
    res.json({
        success: true,
        order
    })
}