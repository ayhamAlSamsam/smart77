const asyncHandler = require("express-async-handler");
const factory = require("./handlersFactory");
const Contact = require("../models/contactModel");


// @desc    Get list of contacts
// @route   GET /api/v1/contact
// @access  Public
exports.getContacts = factory.getAll(Contact);

// @desc    Get specific Contact by id
// @route   GET /api/v1/contact/:id
// @access  Public
exports.getContact= factory.getOne(Contact);

// @desc    Create Contact
// @route   POST  /api/v1/contact
// @access  Private
exports.createContact= factory.createOne(Contact);

// @desc    Update specific Contact
// @route   PUT /api/v1/contact/:id
// @access  Private
exports.updateContact= factory.updateOne(Contact);

// @desc    Delete specific Contact
// @route   DELETE /api/v1/contact/:id
// @access  Private
exports.deleteContact= factory.deleteOne(Contact);
