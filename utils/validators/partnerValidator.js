const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");

exports.getPartnerValidator = [
  check("id").isMongoId().withMessage("Invalid Partner id format"),
  validatorMiddleware,
];
exports.createPartnerValidator = [
  check("logo").notEmpty().withMessage("logo is required "),
  validatorMiddleware,
];
exports.updatePartnerValidator = [
  check("id").isMongoId().withMessage("Invalid Partner id format"),
  validatorMiddleware,
];
exports.deletePartnerValidator = [
  check("id").isMongoId().withMessage("Invalid Partner id format"),
  validatorMiddleware,
];
