const express = require('express');
const {detail,add, create, edit, update, remove} = require('../controllers/productsController');
const productValidator = require('../validations/productValidator');
const upload = require('../middlewares/upload');
const router  = express.Router();

/* /products */

router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add',upload.fields([
        {
            name : 'image'
        },
        {
            name : 'images'
        }
    ]), productValidator, create)
    .get('/edit/:id',edit)
    .put('/update/:id',upload.fields([
        {
            name : 'image'
        },
        {
            name : 'images'
        }
    ]),update)
    .delete('/remove/:id',remove)




module.exports = router;