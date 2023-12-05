const express = require('express');
const { checkEmail } = require('../controllers/APIs/usersApiController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApiController');
const { getAllCategory, totalProductInDB } = require('../controllers/APIs/productsApiController');
const router = express.Router();

/* /api */
router
    .get('/check-email',checkEmail)

    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)

    .get('/categories', getAllCategory)

    .get('/products/count',totalProductInDB)


module.exports = router;
