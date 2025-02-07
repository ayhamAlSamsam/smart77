const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Location = require("../models/locationModel");
exports.uploadLocationImage = uploadSingleImage("imageCover");

// Image processing
exports.resizeLocationImages = asyncHandler(async (req, res, next) => {
  const filename = `Location-${uuidv4()}-${Date.now()}.webp`;
  if (req.file) {
    await sharp(req.file.buffer)
      .toFormat("webp")
      .webp({ quality: 70 })
      .toFile(`uploads/locations/${filename}`);

    // Save image into our db
    req.body.imageCover = filename;
  }

  next();
});

// @desc    Get list of Locations
// @route   GET /api/v1/location
// @access  Public
exports.getLocations = factory.getAll(Location);

// @desc    Get specific location by id
// @route   GET /api/v1/location/:id
// @access  Public
exports.getLocation = factory.getOne(Location);

// @desc    Create location
// @route   POST  /api/v1/location
// @access  Private
exports.createLocation = factory.createOne(Location);

// @desc    Update specific location
// @route   PUT /api/v1/location/:id
// @access  Private
exports.updateLocation = factory.updateOne(Location);

// @desc    Delete specific location
// @route   DELETE /api/v1/location/:id
// @access  Private
exports.deleteLocation = factory.deleteOne(Location);
