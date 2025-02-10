const asyncHandler = require("express-async-handler");
const factory = require("./handlersFactory");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");
const { uploadSingleImage } = require("../middlewares/uploadingImage");
const Blog = require("../models/blogsModel");

exports.uploadBlogImage = uploadSingleImage("imageCover");

// Image processing
exports.resizeBlogImages = asyncHandler(async (req, res, next) => {
  const filename = `Blog-${uuidv4()}-${Date.now()}.webp`;
  if (req.file) {
    await sharp(req.file.buffer)
      .toFormat("webp")
      .webp({ quality: 70 })
      .toFile(`uploads/blogs/${filename}`);

    // Save image into our db
    req.body.imageCover = filename;
  }

  next();
});
// @desc    Get list of Blogs
// @route   GET /api/v1/blogs
// @access  Public
exports.getBlogs = factory.getAll(Blog);

// @desc    Get specific Blog by id
// @route   GET /api/v1/blogs/:id
// @access  Public
exports.getBlog= factory.getOne(Blog);

// @desc    Create Blog
// @route   POST  /api/v1/blogs
// @access  Private
exports.createBlog= factory.createOne(Blog);

// @desc    Update specific Blog
// @route   PUT /api/v1/blogs/:id
// @access  Private
exports.updateBlog= factory.updateOne(Blog);

// @desc    Delete specific Blog
// @route   DELETE /api/v1/blogs/:id
// @access  Private
exports.deleteBlog= factory.deleteOne(Blog);
