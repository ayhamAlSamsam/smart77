const express = require("express");

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  uploadProjectImage,
  resizeProjectImages,
  filterProjectsByCategory,
} = require("..//services/projectService");

const {
  getProjectValidator,
  createProjectValidator,
  updateProjectValidator,
  deleteProjectValidator,
} = require("../utils/validators/projectValidator");

const router = express.Router();

router
  .route("/")
  .get(getProjects, filterProjectsByCategory)
  .post(
    uploadProjectImage,
    resizeProjectImages,
    createProjectValidator,
    createProject
  );
router
  .route("/:id")
  .get(getProjectValidator, getProject)
  .put(
    uploadProjectImage,
    resizeProjectImages,
    updateProjectValidator,
    updateProject
  )
  .delete(deleteProjectValidator, deleteProject);

module.exports = router;
