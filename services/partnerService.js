const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Partner = require("../models/partnerModel");
exports.uploadPartnerImage = uploadSingleImage("logo");

// Image processing
exports.resizePartnerImages = asyncHandler(async (req, res, next) => {
  const filename = `Partner-${uuidv4()}-${Date.now()}.webp`;
  if (req.file) {
    await sharp(req.file.buffer)
      .toFormat("webp")
      .webp({ quality: 70 })
      .toFile(`uploads/partners/${filename}`);

    // Save image into our db
    req.body.logo = filename;
  }

  next();
});

// @desc    Get list of Partners
// @route   GET /api/v1/partner
// @access  Public
exports.getPartners = factory.getAll(Partner);

// @desc    Get specific partner by id
// @route   GET /api/v1/partner/:id
// @access  Public
exports.getPartner= factory.getOne(Partner);

// @desc    Create partner
// @route   POST  /api/v1/partner
// @access  Private
exports.createPartner= factory.createOne(Partner);

// @desc    Update specific partner
// @route   PUT /api/v1/partner/:id
// @access  Private
exports.updatePartner= factory.updateOne(Partner);

// @desc    Delete specific partner
// @route   DELETE /api/v1/partner/:id
// @access  Private
exports.deletePartner= factory.deleteOne(Partner);
