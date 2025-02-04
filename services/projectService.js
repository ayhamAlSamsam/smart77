const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Project = require("../models/projectsModel");
exports.uploadProjectImage = uploadSingleImage("imageCover");

// Image processing
exports.resizeProjectImages = asyncHandler(async (req, res, next) => {
  const filename = `Project-${uuidv4()}-${Date.now()}.jpeg`;
  if (req.file) {
    await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 100 })
      .toFile(`uploads/projects/${filename}`);

    // Save image into our db
    req.body.imageCover = filename;
  }

  next();
});

// @desc    Get list of projects
// @route   GET /api/v1/project
// @access  Public
exports.getProjects = factory.getAll(Project);

// @desc    Get specific project by id
// @route   GET /api/v1/project/:id
// @access  Public
exports.getProject = factory.getOne(Project);

// @desc    Create project
// @route   POST  /api/v1/project
// @access  Private
exports.createProject = factory.createOne(Project);

// @desc    Update specific project
// @route   PUT /api/v1/project/:id
// @access  Private
exports.updateProject = factory.updateOne(Project);

// @desc    Delete specific project
// @route   DELETE /api/v1/project/:id
// @access  Private
exports.deleteProject = factory.deleteOne(Project);
