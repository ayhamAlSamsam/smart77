const express = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
  uploadBlogImage,
  resizeBlogImages
} = require("..//services/blogsService");

const {
  getBlogValidator,
  createBlogValidator,
  deleteBlogValidator,
  updateBlogValidator,
} = require("../utils/validators/blogsValidator");

const router = express.Router();

router.route("/").get(getBlogs).post(  uploadBlogImage,
  resizeBlogImages,createBlogValidator, createBlog);
router
  .route("/:id")
  .get(getBlogValidator, getBlog)
  .put(  uploadBlogImage,
    resizeBlogImages,updateBlogValidator, updateBlog)
  .delete(deleteBlogValidator, deleteBlog);

module.exports = router;
