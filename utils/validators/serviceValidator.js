const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const slugify = require("slugify");

exports.getServiceValidator = [
  check("id").isMongoId().withMessage("Invalid Service id format"),
  validatorMiddleware,
];
exports.createServiceValidator = [
  check("name_ar")
    .notEmpty()
    .withMessage("Service required")
    .isLength({ min: 3 })
    .withMessage("Too short Service name")
    .isLength({ max: 32 })
    .withMessage("too long Service name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("name_en")
    .notEmpty()
    .withMessage("Service required")
    .isLength({ min: 3 })
    .withMessage("Too short Service name")
    .isLength({ max: 32 })
    .withMessage("too long Service name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("description_ar")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 15 })
    .withMessage("too short description"),

  check("description_en")
    .notEmpty()
    .withMessage("description required")
    .isLength({ min: 15 })
    .withMessage("too short description"),
    
  check("imageCover").notEmpty().withMessage("Service imageCover is required"),
  validatorMiddleware,
];
exports.updateServiceValidator = [
  check("id").isMongoId().withMessage("Invalid Service id format"),
  validatorMiddleware,
];
exports.deleteServiceValidator = [
  check("id").isMongoId().withMessage("Invalid Service id format"),
  validatorMiddleware,
];
