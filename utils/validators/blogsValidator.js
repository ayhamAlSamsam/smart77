const { check } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getBlogValidator = [
  check('id').isMongoId().withMessage('Invalid Blog id format'),
  validatorMiddleware,
];
  
  exports.createBlogValidator = [
    
    check('location_ar')
      .notEmpty()
      .withMessage('Arabic location is required')
      .isLength({ min: 2, max: 32 })
      .withMessage('Location must be between 2 and 32 characters'),
  
    check('location_en')
      .notEmpty()
      .withMessage('English location is required')
      .isLength({ min: 2, max: 32 })
      .withMessage('Location must be between 2 and 32 characters'),
  
    check('text_ar')
      .notEmpty()
      .withMessage('Arabic text is required')
      .isLength({ min: 5 })
      .withMessage('Too short text'),
  
    check('text_en')
      .notEmpty()
      .withMessage('English text is required')
      .isLength({ min: 5 })
      .withMessage('Too short text'),
  
    check('publisher')
      .notEmpty()
      .withMessage('Publisher is required'),
  
    check('publishDate')
      .notEmpty()
      .withMessage('Publish date is required')
      .isISO8601()
      .withMessage('Invalid date format'),
  
    check('imageCover')
      .notEmpty()
      .withMessage('Image cover is required'),
  
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