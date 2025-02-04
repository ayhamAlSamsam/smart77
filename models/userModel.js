const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({

    name :
    {
        type : String ,
        trim : true ,
        required :[true , 'name required']

    }   , 
    slug : 
    {
        type : String ,
        lowercase : true

    },
    email :
    {
        type : String ,
        required : [true ,'email is required'],
        lowercase : true,
        unique : true

    },
    phone : String,
    profileImage : String,

    password : 
    {
        type : String ,
        required : [true , 'password is required '],
        minlength : [6,'too short password']

    },
    passwordChangedAt: Date,
    passwordResetCode: String,
    passwordResetExpires: Date,
    passwordResetVerified: Boolean,
    role : 
    {
        type : String ,
        enum : ['admin' , 'user'],
        default : "user"
    },

},{timestamps : true})

userSchema.pre("save",  async function(next)
{
    this.password =  await (bcrypt.hash(this.password , 12))
    next() 
})

const User = mongoose.model("User", userSchema);
module.exports = User ;