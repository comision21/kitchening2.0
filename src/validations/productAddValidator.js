const { check, body } = require("express-validator");
const {unlinkSync, existsSync} = require('fs');

module.exports = [
  check("title")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 4,
      max: 50,
    })
    .withMessage("Debe tener entre 4 y 20 caracteres"),
  check("categoryId")
    .notEmpty()
    .withMessage("Es requerida"),
  check("sectionId")
    .notEmpty()
    .withMessage("Es requerida"),
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("description").isLength({
    min: 20,
    max: 500,
  }).withMessage('Debe tener entre 20 y 500 caracteres'),
  body('image')
    .custom((value,{req}) => {
      if(!req.files.image && !req.fileValidatorError.image){
        return false
      }
      return true
    }).withMessage('Debes subir una imagen principal'),
    body('images')
    .custom((value,{req}) => {
      if(req.files.images.length > 3){
        req.files.images.forEach(file => {
          existsSync(`./public/img/products/${file.filename}`) && unlinkSync(`./public/img/products/${file.filename}`)
        });
        return false
      }
      return true
    }).withMessage('Solo se permiten 3 imágenes')
];
