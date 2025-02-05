const express = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("..//services/blogsService");

const {
  getBlogValidator,
  createBlogValidator,
  deleteBlogValidator,
  updateBlogValidator,
} = require("../utils/validators/blogsValidator");

const router = express.Router();

router.route("/").get(getBlogs).post(createBlogValidator, createBlog);
router
  .route("/:id")
  .get(getBlogValidator, getBlog)
  .put(updateBlogValidator, updateBlog)
  .delete(deleteBlogValidator, deleteBlog);

module.exports = router;
