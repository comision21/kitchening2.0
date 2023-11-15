const db = require("../../database/models");

const calculateTotal = (req) => {
  req.session.cart.total = req.session.cart.products
  .map((product) => product.price * product.quantity)
  .reduce((a, b) => a + b, 0);
}

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

    const { quantity, order, product: id } = req.body;

    const { title, price, discount, images } = await db.Product.findByPk(id, {
      include: ["images"],
    });

    let newProduct = {
      id,
      title,
      price,
      discount,
      image: images.find((image) => image.main).file,
      quantity: +quantity || 1,
    };

    if (req.session.cart.products.map((product) => product.id).includes(id)) {
      req.session.cart.products = req.session.cart.products.map((product) => {
        if (product.id === id) {
          ++product.quantity;
        }
        return product;
      });
    } else {
      req.session.cart.products.push(newProduct);
    }

    calculateTotal(req)

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const removeItemToCart = async (req, res) => {
  try {
    if (!req.session.cart) {
      let error = new Error("Error al cargar el carrito :(");
      error.status = 404;
      throw error;
    }

    const { product: id } = req.query;

    req.session.cart.products = req.session.cart.products.map((product) => {
      if (product.id === +id && product.quantity > 1) {
        --product.quantity;
      }
      return product;
    });
    
    calculateTotal(req)

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const deleteItemToCart = async (req,res) => {
  try {

    if (!req.session.cart) {
      let error = new Error("Error al cargar el carrito :(");
      error.status = 404;
      throw error;
    }

    const { product: id } = req.query;

    req.session.cart.products = req.session.cart.products.filter(product => product.id !== +id)

    calculateTotal(req)

  return res.status(200).json({
    ok: true,
    data: req.session.cart,
  });
    
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
};

const clearCart = async (req,res) => {
  try {

    if (!req.session.cart) {
      let error = new Error("Error al cargar el carrito :(");
      error.status = 404;
      throw error;
    };

    req.session.cart.products = [];

    calculateTotal(req)

    return res.status(200).json({
      ok: true,
      data: req.session.cart,
    });
    
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error :(",
    });
  }
}

module.exports = {
  getCart,
  addItemToCart,
  removeItemToCart,
  deleteItemToCart,
  clearCart
};
