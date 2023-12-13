const express = require('express');
const { checkEmail } = require('../controllers/APIs/usersApiController');
const { getCart, addItemToCart, removeItemToCart, deleteItemToCart, clearCart } = require('../controllers/APIs/cartApiController');
const { getCategoriesWithProducts, totalProductInDB, getAllProducts, createProduct, getCategories, getSections, updateProduct, deleteProduct } = require('../controllers/APIs/productsApiController');
const router = express.Router();

/* /api */
router
    .get('/check-email',checkEmail)

    .get('/cart', getCart)
    .post('/cart', addItemToCart)
    .delete('/cart',removeItemToCart)
    .delete('/cart/item', deleteItemToCart)
    .delete('/cart/all',clearCart)

    .get('/sections',getSections)

    .get('/categories/products', getCategoriesWithProducts)
    .get('/categories', getCategories)

    .get('/products/count',totalProductInDB)
    .get('/products',getAllProducts)
    .post('/products',createProduct)
    .put('/products/:id', updateProduct)
    .delete('/products/:id',deleteProduct)


module.exports = router;
