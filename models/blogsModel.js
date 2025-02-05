const mongoose = require('mongoose')


const blogsSchema = new mongoose.Schema({
  location: {
     ar: { type: String, required: true },
     en: { type: String, required: true },
    
  },
text: {
     ar: { type: String, required: true },
     en: { type: String, required: true }   
    },
publisher : {
      type: String,
      required : [true , "publisher is required"]
  
    },
publishDate :{
    type : Date ,
    required : [true , "publishDate is required"]

}

  },
{ timestamps: true }
);



// 2-create model
const blogsModel = mongoose.model('blogs',blogsSchema)

module.exports = blogsModel