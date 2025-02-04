const mongoose = require('mongoose')


const blogsSchema = new mongoose.Schema({
  location: {
     ar: { type: String, required: true },
     en: { type: String, required: true },
    
  },
  slug: {
    type: String,
    lowercase: true,
  },
text: {
     ar: { type: String, required: true },
     en: { type: String, required: true }   
    },
publish : {
      type: String,
      required : [true , "publish is required"]
  
    },
publishDate :{
    type : Date ,
    required : [true , "publishDate is required"]

}

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
blogsSchema.post('init', (doc) => {
setImageURL(doc);
});

// create
blogsSchema.post('save', (doc) => {
setImageURL(doc);
});

// 2-create model
const blogsModel = mongoose.model('blogs',blogsSchema)

module.exports = blogsModel