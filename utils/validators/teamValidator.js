const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');
const slugify = require('slugify');

exports.getEmployeeValidator = [
  check('id').isMongoId().withMessage('Invalid Employee id format'),
  validatorMiddleware,
];
exports.createEmployeeValidator = [
  check('name')
    .notEmpty()
    .withMessage('Employee required')
    .isLength({ min: 3 })
    .withMessage('Too short Employee name')
    .isLength({ max: 32 })
    .withMessage('too long Employee name')
    .custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true}) ,

    check('job') 
    .notEmpty()
    .withMessage("job required") 
    .isLength({min : 5})
    .withMessage("too short job"),
    
    check('imageCover')
    .notEmpty()
    .withMessage('Employee imageCover is required'),
  validatorMiddleware,
];
exports.updateEmployeeValidator = [
  check('id').isMongoId().withMessage('Invalid Employee id format'),
  check('name').custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true}) ,
  validatorMiddleware,
];
exports.deleteEmployeeValidator = [
  check('id').isMongoId().withMessage('Invalid Employee id format'),
  validatorMiddleware,
];