const db = require("../../database/models");

const getCategoriesWithProducts = async (req, res) => {
  try {
    const categories = await db.Category.findAll({
      include: [
        {
          association: "products",
          attributes: ["id", "title", "price", "discount"],
        },
      ],
    });

    return res.status(200).json({
      ok: true,
      data: categories,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll({
      attributes: ["name", "id"],
    });

    return res.status(200).json({
      ok: true,
      data: categories,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const getSections = async (req, res) => {
  try {
    const sections = await db.Section.findAll({
      attributes: ["name", "id"],
    });

    return res.status(200).json({
      ok: true,
      data: sections,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const totalProductInDB = async (req, res) => {
  try {
    const total = await db.Product.count();

    return res.status(200).json({
      ok: true,
      data: total,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      include: ["section", "category", "images"],
    });

    return res.status(200).json({
      ok: true,
      data: products,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, price, discount, categoryId, sectionId, description } =
      req.body;

    const newProduct = await db.Product.create({
      title: title?.trim(),
      discount: discount || 0,
      price,
      categoryId,
      sectionId,
      description: description?.trim(),
    });

    const product = await db.Product.findByPk(newProduct.id,{
      include: ["section", "category", "images"],
    })

    return res.status(200).json({
      ok: true,
      data: product,
      msg: "Producto agregado con éxito",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
      data: null,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { title, price, discount, categoryId, sectionId, description } =
      req.body;

    await db.Product.update(
      {
        title: title.trim(),
        discount: discount,
        price,
        categoryId,
        sectionId,
        description: description.trim(),
      },
      {
        where : {
          id : req.params.id
        }
      }
    );

    const product = await db.Product.findByPk(req.params.id,{
      include: ["section", "category", "images"],
    })

    return res.status(200).json({
      ok: true,
      data: product,
      msg: "Producto actualizado con éxito",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
      data: null,
    });
  }
};


const deleteProduct = async (req,res) => {
  try {
    await db.Product.destroy({
      where : {
        id : req.params.id
      }
    })
    return res.status(200).json({
      ok: true,
      data: null,
      msg: "Producto eliminado con éxito",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Upss, hubo un error",
      data: null,
    });
  }
}

module.exports = {
  getCategoriesWithProducts,
  getCategories,
  totalProductInDB,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSections,
};
