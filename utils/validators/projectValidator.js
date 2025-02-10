const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const slugify = require('slugify');

exports.getProjectValidator = [
  check('id').isMongoId().withMessage('Invalid Project id format'),
  validatorMiddleware,
];
exports.createProjectValidator = [
  check('name')
    .notEmpty()
    .withMessage('Project required')
    .isLength({ min: 3 })
    .withMessage('Too short Project name')
    .isLength({ max: 32 })
    .withMessage('too long Project name')
    .custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true}) ,
      check("comingSoon")
      .optional(),
    check('description')
    .notEmpty()
    .withMessage("description required") 
    .isLength({min : 15})
    .withMessage("too short description"),
    check('imageCover')
    .notEmpty()
    .withMessage('Project imageCover is required'),
  validatorMiddleware,
];
exports.updateProjectValidator = [
  check('id').isMongoId().withMessage('Invalid Project id format'),
  check('name').custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true}) ,
  validatorMiddleware,
];
exports.deleteProjectValidator = [
  check('id').isMongoId().withMessage('Invalid Project id format'),
  validatorMiddleware,
];