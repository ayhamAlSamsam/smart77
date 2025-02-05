const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const bcrypt = require('bcrypt')
const factory = require('./handlersFactory')
const { uploadSingleImage } = require('../middlewares/uploadingImage');
const User = require('../models/userModel');

// Upload single image
exports.uploadUserImage = uploadSingleImage('profileImage');

// Image processing
exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `user-${uuidv4()}-${Date.now()}.jpeg`;
if(req.file){await sharp(req.file.buffer)
    
    .toFormat('webp')
    .jpeg({ quality: 70 })
    .toFile(`uploads/users/${filename}`);

  // Save image into our db 
   req.body.profileImage = filename;}
  

  next();
});

// @desc    Get list of users
// @route   GET /api/v1/users
// @access  Private
exports.getUsers = factory.getAll(User);

// @desc    Get specific user by id
// @route   GET /api/v1/users/:id
// @access  Private
exports.getUser = factory.getOne(User);

// @desc    Create user
// @route   POST  /api/v1/users
// @access  Private
exports.createUser = factory.createOne(User);

// @desc    Update specific user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = 
  asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id,
            {name : req.body.name ,
            email : req.body.email ,
            slug : req.body.slug ,
            profileImage : req.body.profileImage ,
            phone : req.body.phone ,
               
            }   
        , {
      new: true,
    });
  })

  // @desc    Delete specific user
  // @route   DELETE /api/v1/users/:id
  // @access  Private/Admin
  exports.deleteUser = factory.deleteOne(User);

 

  