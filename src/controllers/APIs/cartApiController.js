const db = require("../../database/models");

const getCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Error al cargar el carrito :(");
      error.status = 404;
      throw error;
    }

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const addItemToCart = async (req, res) => {
  try {

    if (!req.session.cart) {
        let error = new Error("Error al cargar el carrito :(");
        error.status = 404;
        throw error;
      }


    const { quantity, order, product } = req.query;


    const { title, price, discount, images } = await db.Product.findByPk(product, {
      include: ["images"],
    });

    console.log(images);


    req.session.cart.products.push({
      title,
      price,
      discount,
      image: images.find((image) => image.main).file,
      quantity: quantity || 1,
    });

    req.session.cart.total = req.session.cart.products
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });

  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

module.exports = {
  getCart,
  addItemToCart
};
