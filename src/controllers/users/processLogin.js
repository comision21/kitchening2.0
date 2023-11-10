const { validationResult } = require("express-validator");
const db = require("../../database/models");
module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        req.session.userLogin = {
          id: user.id,
          name: user.name,
          role: user.roleId,
        };

        req.body.remember !== undefined &&
          res.cookie("kitcheningUser4EVER", req.session.userLogin, {
            maxAge: 1000 * 60 * 5,
          });

        db.Order.findOne({
          where: {
            userId: user.id,
            statusId: 1,
          },
          include: [
            {
              association: "items",
              include: [
                {
                  association: "product",
                  include: ["images"],
                },
              ],
            },
          ],
        }).then((order) => {
          if (order) {
            req.session.cart = {
              orderId: order.id,
              total: order.total,
              products: order.items.map(
                ({ quantity, product: { title, price, discount, images } }) => {
                  return {
                    title,
                    price,
                    discount,
                    image: images.find((image) => image.main).file,
                    quantity,
                  };
                }
              ),
            };
            console.log(req.session.cart, '<<<<<<<<<<<<<<<<<');
            return res.redirect("/");
          } else {
            db.Order.create({
              total : 0,
              userId : user.id,
              statusId : 1
            }).then(order => {
              req.session.cart = {
                orderId: order.id,
                total: order.total,
                products: [],
              };
              console.log(req.session.cart, '<<<<<<<<<<<<<<<<<');
              return res.redirect("/");
            })
          }
        });
      }).catch((error) => console.log(error));
  } else {
    return res.render("login", {
      errors: errors.mapped(),
    });
  }
};
