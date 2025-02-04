const express = require('express');

const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
  uploadServiceImage,
  resizeServiceImages
} = require('../services/serviceService');

const {getServiceValidator,createServiceValidator,updateServiceValidator} = require("../utils/validators/serviceValidator.js")

const router = express.Router();

router.route('/').get(getServices).post
( uploadServiceImage,resizeServiceImages,createServiceValidator,createService);
router
  .route('/:id')
  .get(getServiceValidator , getService)
  .put( uploadServiceImage,resizeServiceImages,updateServiceValidator,updateService)
  .delete(deleteService);

module.exports = router;