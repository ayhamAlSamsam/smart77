const mongoose = require('mongoose')


const projectSchema = new mongoose.Schema({
  name_ar: {
    type: String,
    required: [true, 'project name required'],
    
    minlength: [3, 'Too short project name'],
  },
  name_en: {
    type: String,
    required: [true, 'project name required'],
    
    minlength: [3, 'Too short project name'],
  },
  
  slug: {
    type: String,
    lowercase: true,
  },

imageCover: {
      type: String,
      required: [true, 'project Image cover is required'],
    },
description_ar: {
      type: String,
      required: [true, "location description is required"],
      minlength: [10, "Too short location description"],
    },
    description_en: {
      type: String,
      required: [true, "location description is required"],
      minlength: [10, "Too short location description"],
    },
    commingSoon : Boolean ,
    category_ar: {
      type: String , 
      required: [true, 'Category is required'] ,
    },
    category_en: {
      type: String , 
      required: [true, 'Category is required'] ,
    }
  },
{ timestamps: true }
);

const setImageURL = (doc) => {
if (doc.imageCover) {
  const imageUrl = `${process.env.BASE_URL}/projects/${doc.imageCover}`;
  doc.imageCover = imageUrl;
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