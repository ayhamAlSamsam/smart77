const express = require("express");

const {
  getPartners,
  getPartner,
  createPartner,
  deletePartner,
  updatePartner,
} = require("..//services/partnerService");

const {
  getPartnerValidator,
  createPartnerValidator,
  deletePartnerValidator,
  updatePartnerValidator,
} = require("../utils/validators/partnerValidator");

const router = express.Router();

router.route("/").get(getPartners).post(createPartnerValidator, createPartner);
router
  .route("/:id")
  .get(getPartnerValidator, getPartner)
  .put(updatePartnerValidator, updatePartner)
  .delete(deletePartnerValidator, deletePartner);

module.exports = router;
