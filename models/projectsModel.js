const mongoose = require('mongoose')


const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'project required'],
    unique: [true, 'project must be unique'],
    minlength: [3, 'Too short project name'],
    maxlength: [32, 'Too long project name'],
  },
  slug: {
    type: String,
    lowercase: true,
  },
imageCover: {
      type: String,
      required: [true, 'project Image cover is required'],
    },
description : {
      type: String,
      required: [true, 'project description is required'],
      minlength: [20, 'Too short project description'],
    },
  },
{ timestamps: true }
);

const setImageURL = (doc) => {
if (doc.image) {
  const imageUrl = `${process.env.BASE_URL}/project/${doc.image}`;
  doc.image = imageUrl;
}
};


// findOne, findAll and update
projectSchema.post('init', (doc) => {
setImageURL(doc);
});

// create
projectSchema.post('save', (doc) => {
setImageURL(doc);
});

// 2-create model
const projectModel = mongoose.model('project',projectSchema)

module.exports = projectModel