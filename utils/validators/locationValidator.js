const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getLocationValidator = [
  check("id").isMongoId().withMessage("Invalid Location id format"),
  validatorMiddleware,
];
exports.createLocationValidator = [
  check("location").notEmpty().withMessage("location required"),

  check("descrpition")
    .notEmpty()
    .withMessage("descrpition required")
    .isLength({ min: 8 })
    .withMessage("too short description"),

  check("imageCover").notEmpty().withMessage("imageCover is required "),
  validatorMiddleware,
];
exports.updateLocationValidator = [
  check("id").isMongoId().withMessage("Invalid Location id format"),
  validatorMiddleware,
];
exports.deleteLocationValidator = [
  check("id").isMongoId().withMessage("Invalid Location id format"),
  validatorMiddleware,
];
