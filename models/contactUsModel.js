const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    phone: String,

    name: String,

    description: String,
  },
  { timestamps: true }
);

const contactUsModel = mongoose.model("ContactUs", contactUsSchema);
module.exports = contactUsModel;
