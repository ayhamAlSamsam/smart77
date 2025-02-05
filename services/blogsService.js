const asyncHandler = require("express-async-handler");
const factory = require("./handlersFactory");
const Blog = require("../models/blogsModel");


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
