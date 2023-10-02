const db = require('../database/models');

module.exports = {
    index : (req,res) => {   
        
        db.Product.findAll()
            .then(products => {
                return res.render('index', {
                    products,
                    productsCarousel : []
        
                })
            })
            .catch(error => console.log(error))

        
    },
    admin : (req,res)  => {

        const products = db.Product.findAll();
        const categories = db.Category.findAll();
        const sections = db.Section.findAll();
        const users = db.User.findAll();

        Promise.all([products,categories,sections,users])
            .then(([products,categories,sections,users]) => {
                return res.render('admin', {
                    products,
                    categories,
                    sections,
                    users
                })
            })
            .catch(error => console.log(error))
       
    }
}