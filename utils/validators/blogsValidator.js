const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getBlogValidator = [
  check('id').isMongoId().withMessage('Invalid Blog id format'),
  validatorMiddleware,
];
exports.createBlogValidator = [
  check('location')
    .notEmpty()
    .withMessage('location required')
    .isLength({ min: 2 })
    .withMessage('Too short location name')
    .isLength({ max: 32 })
    .withMessage('too long location name'),

    check('text')
    .notEmpty()
    .withMessage("text required") 
    .isLength({min : 5})
    .withMessage("too short text"),
    check('publisher')
    .notEmpty()
    .withMessage("publisher is required"),
    check('publishDate')
    .notEmpty()
    .withMessage('publishDate is required'),    

  validatorMiddleware,
];
exports.updateBlogValidator = [
  check('id').isMongoId().withMessage('Invalid Blog id format'),
  validatorMiddleware,
];
exports.deleteBlogValidator = [
  check('id').isMongoId().withMessage('Invalid Blog id format'),
  validatorMiddleware,
];