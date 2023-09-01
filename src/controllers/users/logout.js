module.exports = (req,res) => {
    req.session.destroy();
    res.cookie('kitcheningUser4EVER', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
}