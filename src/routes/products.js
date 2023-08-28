const express = require('express');
const {detail,add, create, edit, update, remove} = require('../controllers/productsController');
const productValidator = require('../validations/productValidator');
const router  = express.Router();

/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add', productValidator, create)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/remove/:id',remove)




module.exports = router;