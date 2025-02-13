const express = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  uploadBlogImage,
  resizeBlogImages,
} = require("..//services/blogsService");

/*const {
  getBlogValidator,
  createBlogValidator,
  deleteBlogValidator,
  updateBlogValidator,
} = require("../utils/validators/blogsValidator");*/

const router = express.Router();

router
  .route("/")
  .get(getBlogs)
  .post(uploadBlogImage, resizeBlogImages, createBlog);
router
  .route("/:id")
  .get(getBlog)
  .put(uploadBlogImage, resizeBlogImages, updateBlog)
  .delete(deleteBlog);

module.exports = router;
