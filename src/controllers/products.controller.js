const Product = require('../models/products.model')


const getAllProducts = async (req, res, next) => { 
   
   try {
    const products =  await Product.find().populate('owner','username email -_id');
   res.json(products);
   } catch (error) {
    next(error)
    
    
   } 
}

const  getByDepartment = async (req, res, next) =>{
    const {department } = req.params
    try {
       const products = await Product.find({department}) // que me filte todos aquellos productos por el department que nosotros pongamos en la url 
        res.json(products)
    } catch (error) {
        next(error)
    }

}

const getByPrice = async (req, res, next) =>{
    const {min = 0 , max = 4000} = req.query; 
    
    try {
        const products = await Product.find({
            price: {$gte: min, $lte: max} // el precio tiene que ser mayor o igual  del precio minimo y menor o igual  que el precio maximo
        })
        res.json(products)
    } catch (error) {
        next(error)
    }

}


const createProduct = async (req, res, next) => {
    //req.body - datos del nuevo producto
    try {
        req.body.owner = req.user._id
      const product =  await Product.create(req.body);
      res.json(product);
    } catch (error) {
        next(error);
        
    }
}

const updateProduct = async (req,res, next) =>{
    const {productId} = req.params;

    try {
      const product =  await Product.findByIdAndUpdate(productId, req.body, {new:true }) // el new a true es para que lo que te duelva es el objeto modificado
      res.json(product);
    } catch (error) {
        next(error)
    }
}

const removeProduct = async (req, res, next) => {

    const {productId} = req.params;

    try {
       const product =  await Product.findByIdAndDelete(productId)
       res.json(product)
    } catch (error) {
        next(error)
    }

}




module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    removeProduct,
    getByDepartment,
    getByPrice
}