const express = require("express");

const {
  getPartners,
  getPartner,
  createPartner,
  deletePartner,
  updatePartner,
  uploadPartnerImage,
  resizePartnerImages
} = require("..//services/partnerService");

const {
  getPartnerValidator,
  createPartnerValidator,
  deletePartnerValidator,
  updatePartnerValidator,
} = require("../utils/validators/partnerValidator");

const router = express.Router();

router.route("/").get(getPartners).post(uploadPartnerImage,
  resizePartnerImages,createPartnerValidator, createPartner);
router
  .route("/:id")
  .get(getPartnerValidator, getPartner)
  .put(uploadPartnerImage,
    resizePartnerImages,updatePartnerValidator, updatePartner)
  .delete(deletePartnerValidator, deletePartner);

module.exports = router;
