const { register, login, addProductCart, profile } = require('../../controllers/users.controller');

const router = require('express').Router();
const { checkToken } = require('../../utils/middleware')

router.get('/profile',checkToken,profile)
router.post('/register', register)
router.post('/login',login)
router.put('/add-product', checkToken ,addProductCart)

module.exports = router;