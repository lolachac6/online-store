const router = require('express').Router();

router.use('/products',require('./api/products.routes')) // esto es para products
router.use('/users', require('./api/users.routes')) // esto es para users



module.exports = router;