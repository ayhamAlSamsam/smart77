const express = require("express");

const {
  getLocations,
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation,
} = require("..//services/locationService");

const {
  getLocationValidator,
  createLocationValidator,
  deleteLocationValidator,
  updateLocationValidator,
} = require("../utils/validators/locationValidator");

const router = express.Router();

router.route("/").get(getLocations).post(createLocationValidator, createLocation);
router
  .route("/:id")
  .get(getLocationValidator, getLocation)
  .put(updateLocationValidator, updateLocation)
  .delete(deleteLocationValidator, deleteLocation);

module.exports = router;
