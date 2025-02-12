const express = require("express");

const {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
} = require("..//services/contactUsService");


const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get (getContact)
  .put( updateContact)
  .delete( deleteContact);

module.exports = router;
