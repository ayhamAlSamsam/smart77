const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Service = require("../models/serviceModel");

exports.uploadServiceImage = uploadSingleImage("imageCover");

// Image processing
exports.resizeServiceImages = asyncHandler(async (req, res, next) => {
  const filename = `service-${uuidv4()}-${Date.now()}.webp`;
  if (req.file) {
    await sharp(req.file.buffer)
      .toFormat("webp")
      .webp({ quality: 70 })
      .toFile(`uploads/services/${filename}`);

    // Save image into our db
    req.body.imageCover = filename;
  }

  next();
});

// @desc    Get list of Services
// @route   GET /api/v1/service
// @access  Public
exports.getServices = factory.getAll(Service);

// @desc    Get specific Service by id
// @route   GET /api/v1/service/:id
// @access  Public
exports.getService = factory.getOne(Service);

// @desc    Create Service
// @route   POST  /api/v1/service
// @access  Private
exports.createService = factory.createOne(Service);

// @desc    Update specific Service
// @route   PUT /api/v1/service/:id
// @access  Private
exports.updateService = factory.updateOne(Service);

// @desc    Delete specific Service
// @route   DELETE /api/v1/service/:id
// @access  Private
exports.deleteService = factory.deleteOne(Service);
