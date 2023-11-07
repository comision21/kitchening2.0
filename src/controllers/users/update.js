const db = require('../../database/models');
const { validationResult } = require('express-validator')

module.exports = (req,res) => {

    const errors = validationResult(req)

    if(errors.isEmpty()){
        const {name, surname, birthday, address, city, province} = req.body;
        db.User.update(
            {
                name : name.trim(),
                surname : surname.trim(),
                birthday
            },
            {
                where : {
                    id : req.session.userLogin.id
                }
            }
        )
            .then( async () => {
                req.session.userLogin.name = name;
                res.locals.userLogin.name = name;

                if(req.cookies.kitcheningUser4EVER){
                    res.cookie("kitcheningUser4EVER", req.session.userLogin);
                }

                await db.Address.update(
                    {
                        address: address.trim(),
                        city,
                        province,
                    },
                    {
                        where : {
                            userId : req.session.userLogin.id
                        }
                    }
                )


                return res.redirect('/')
            })
            .catch(error => console.log(error))
    }else {
        db.User.findByPk(req.session.userLogin.id)
        .then(user => {
            return res.render('profile',{
                ...user.dataValues,
                errors : errors.mapped()
            })
        })
        .catch(error => console.log(error))
    }

  
}