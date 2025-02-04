const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Employee = require("../models/teamModel");

exports.uploadEmployeeImage = uploadSingleImage("imageCover");

// Image processing
exports.resizeEmployeeImages = asyncHandler(async (req, res, next) => {
  const filename = `Employee-${uuidv4()}-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 100 })
      .toFile(`uploads/team/${filename}`);

    // Save image into our db
    req.body.imageCover = filename;
  }

  next();
});

// @desc    Get list of Employees
// @route   GET /api/v1/team
// @access  Public
exports.getEmployees = factory.getAll(Employee);

// @desc    Get specific Employee by id
// @route   GET /api/v1/team/:id
// @access  Public
exports.getEmployee = factory.getOne(Employee);

// @desc    Create Employee
// @route   POST  /api/v1/team
// @access  Private
exports.createEmployee = factory.createOne(Employee);

// @desc    Update specific Employee
// @route   PUT /api/v1/team/:id
// @access  Private
exports.updateEmployee = factory.updateOne(Employee);

// @desc    Delete specific Employee
// @route   DELETE /api/v1/team/:id
// @access  Private
exports.deleteEmployee = factory.deleteOne(Employee);
