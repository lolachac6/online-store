const router = require('express').Router();

const { getAllProducts, createProduct, updateProduct, removeProduct, getByDepartment, getByPrice } = require('../../controllers/products.controller');
const { checkToken } = require('../../utils/middleware');

router.get('/', getAllProducts); //esta es para obtener todos los productos
router.get('/dpt/:department',getByDepartment) // obtener los productos por su departamento
router.get('/price',getByPrice) // obtener los productos segun su precio

router.post('/',checkToken, createProduct); // esta es para crear productos
router.put('/:productId',checkToken, updateProduct) //actualizamos un producto
router.delete('/:productId',checkToken, removeProduct) // esto es para borrar un producto 

module.exports = router;