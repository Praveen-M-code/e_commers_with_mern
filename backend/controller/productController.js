exports.getProducts = (req, res, next) =>{
    res.json({
        success : true,
        message : "Get all products"
    })
}

exports.getSingleProduct = (req, res, next) =>{
    res.json({
        success : true,
        message : "Get single product"
    })
}