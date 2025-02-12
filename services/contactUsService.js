const asyncHandler = require("express-async-handler");
const factory = require("./handlersFactory");
const ContactUs = require("../models/contactUsModel");


// @desc    Get list of contacts
// @route   GET /api/v1/contactUs
// @access  Public
exports.getContacts = factory.getAll(ContactUs);

// @desc    Get specific Contact by id
// @route   GET /api/v1/contactUs/:id
// @access  Public
exports.getContact= factory.getOne(ContactUs);

// @desc    Create Contact
// @route   POST  /api/v1/contactUs
// @access  Private
exports.createContact= factory.createOne(ContactUs);

// @route   PUT /api/v1/contactUs/:id
// @access  Private
exports.updateContact= factory.updateOne(ContactUs);

// @desc    Delete specific Contact
// @route   DELETE /api/v1/contactUs/:id
// @access  Private
exports.deleteContact= factory.deleteOne(ContactUs);
