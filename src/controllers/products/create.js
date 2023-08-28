const {validationResult} = require('express-validator')
const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {

    const errors = validationResult(req);
    if(errors.isEmpty()){
        const products = readJSON('products.json')
        const newProduct = new Product(req.body);
        products.push(newProduct);
        writeJSON(products, 'products.json')
        return res.redirect('/admin')
    }else {
        const categories = readJSON('categories.json');
        const sections = readJSON('sections.json');

          return res.render('productAdd',{
                categories,
                sections : sections.sort(),
                errors : errors.mapped(),
                old : req.body
            })
    }
    

}