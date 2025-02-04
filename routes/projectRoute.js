const express = require('express');

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  uploadProjectImage,
  resizeProjectImages
} = require('..//services/projectService');

const {getProjectValidator,createProjectValidator,updateProjectValidator} = require("../utils/validators/projectValidator")

const router = express.Router();

router.route('/').get(getProjects).post
( uploadProjectImage,resizeProjectImages,createProjectValidator,createProject);
router
  .route('/:id')
  .get(getProjectValidator , getProject)
  .put( uploadProjectImage,resizeProjectImages,updateProjectValidator,updateProject)
  .delete(deleteProject);

module.exports = router;