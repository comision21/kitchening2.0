const express = require('express');
const productsController = require('../controllers/productsController');
const router  = express.Router();

/* /products */

router.get('/detail/:id?', productsController.detail);
router.get('/add', productsController.add)



module.exports = router;