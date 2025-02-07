const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
   email : {
    type : String ,
    required : [true , "email is required"],
    unique : true
   }, 
   phone : String ,
   
   socialMedia : {
    facebook :{ type : String , default : ""},
    instagram :{ type : String , default : ""},
    x :{ type : String , default : ""},
    linkedin :{ type : String , default : ""},

   }


},{timestamps : true})

const contactModel = mongoose.model("Contact",contactSchema)
module.exports = contactModel ;
