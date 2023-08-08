module.exports = {
    detail : (req,res) => {
        return res.render('productDetail')
    },
    add : (req,res) => {
        return res.render('productAdd')
    }
}