const express = require('express');

const {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  uploadEmployeeImage,
  resizeEmployeeImages
} = require('../services/teamService.js');

const {getEmployeeValidator,createEmployeeValidator,updateEmployeeValidator} = require("../utils/validators/teamValidator.js")

const router = express.Router();

router.route('/').get(getEmployees).post
( uploadEmployeeImage,resizeEmployeeImages,createEmployeeValidator,createEmployee);
router
  .route('/:id')
  .get(getEmployeeValidator , getEmployee)
  .put( uploadEmployeeImage,resizeEmployeeImages,updateEmployeeValidator,updateEmployee)
  .delete(deleteEmployee);

module.exports = router;