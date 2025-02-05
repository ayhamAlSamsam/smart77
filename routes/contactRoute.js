const express = require("express");

const {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
} = require("..//services/contactService");

const {
  getContactValidator,
  createContactValidator,
  deleteContactValidator,
  updateContactValidator,
} = require("../utils/validators/conatctValidator");

const router = express.Router();

router.route("/").get(getContacts).post(createContactValidator, createContact);
router
  .route("/:id")
  .get(getContactValidator, getContact)
  .put(updateContactValidator, updateContact)
  .delete(deleteContactValidator, deleteContact);

module.exports = router;
