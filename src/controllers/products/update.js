const {unlinkSync,existsSync} = require('fs');
const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const {title, price, category, discount, description, section} = req.body;
    const products = readJSON('products.json');

    const productsModify = products.map(product => {



        if(product.id === req.params.id){

            (req.files.image && existsSync(`./public/products/${product.image}`)) && unlinkSync(`./public/products/${product.image}`)

            req.files.images &&
            product.images.forEach(image => {
              existsSync(`./public/images/${image}`) &&
              unlinkSync(`./public/images/${image}`);
            });

            product.title = title.trim()
            product.description = description.trim()
            product.price = +price
            product.discount = +discount
            product.category = category
            product.section = section
            product.image = req.files.image ? req.files.image[0].filename : product.image,
            product.images = req.files.images ? req.files.images.map(image => image.filename) : product.images
        }
            
        return product
    })
    
    writeJSON(productsModify, 'products.json')
    
    return res.redirect('/admin')
}