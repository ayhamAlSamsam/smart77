const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const User = require("../../models/userModel");

exports.getContactValidator = [
  check("id").isMongoId().withMessage("Invalid Contact id format"),
  validatorMiddleware,
];
exports.createContactValidator = [
  check("email")
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("Invalid email address")
    .custom((val) =>
      User.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already in use"));
        }
      })
    ),

  check("phone")
    .notEmpty()
    .withMessage("phone required")
    .isMobilePhone()
    .withMessage("invalid phone Number"),

  check("socialMedia").notEmpty().withMessage("social media is required "),
  validatorMiddleware,
];
exports.updateContactValidator = [
  check("id").isMongoId().withMessage("Invalid Contact id format"),
  validatorMiddleware,
];
exports.deleteContactValidator = [
  check("id").isMongoId().withMessage("Invalid Contact id format"),
  validatorMiddleware,
];
