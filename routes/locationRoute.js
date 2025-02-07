const express = require("express");

const {
  getLocations,
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation,
  uploadLocationImage,
  resizeLocationImages
} = require("..//services/locationService");

const {
  getLocationValidator,
  createLocationValidator,
  deleteLocationValidator,
  updateLocationValidator,
} = require("../utils/validators/locationValidator");

const router = express.Router();

router.route("/").get(getLocations).post(uploadLocationImage,resizeLocationImages,createLocationValidator, createLocation);
router
  .route("/:id")
  .get(getLocationValidator, getLocation)
  .put(uploadLocationImage,resizeLocationImages,updateLocationValidator, updateLocation)
  .delete(deleteLocationValidator, deleteLocation);

module.exports = router;
