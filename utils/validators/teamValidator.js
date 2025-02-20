const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const slugify = require("slugify");

exports.getEmployeeValidator = [
  check("id").isMongoId().withMessage("Invalid Employee id format"),
  validatorMiddleware,
];
exports.createEmployeeValidator = [
  check("name_ar")
    .notEmpty()
    .withMessage("Employee required")
    .isLength({ min: 3 })
    .withMessage("Too short Employee name")
    .isLength({ max: 32 })
    .withMessage("too long Employee name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("name_en")
    .notEmpty()
    .withMessage("Employee required")
    .isLength({ min: 3 })
    .withMessage("Too short Employee name")
    .isLength({ max: 32 })
    .withMessage("too long Employee name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("job_ar")
    .notEmpty()
    .withMessage("job required")
    .isLength({ min: 5 })
    .withMessage("too short job"),
  check("job_en")
    .notEmpty()
    .withMessage("job required")
    .isLength({ min: 5 })
    .withMessage("too short job"),

  check("imageCover").notEmpty().withMessage("Employee imageCover is required"),
  validatorMiddleware,
];
exports.updateEmployeeValidator = [
  check("id").isMongoId().withMessage("Invalid Employee id format"),
  validatorMiddleware,
];
exports.deleteEmployeeValidator = [
  check("id").isMongoId().withMessage("Invalid Employee id format"),
  validatorMiddleware,
];
