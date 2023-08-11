const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const {title, price, category, discount, description} = req.body;
    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id === req.params.id){
            product.title = title.trim()
            product.description = description.trim()
            product.price = +price
            product.discount = +discount
            product.category = category
        }
            
        return product
    })
    
    writeJSON(productsModify, 'products.json')
    
    return res.redirect('/admin')
}