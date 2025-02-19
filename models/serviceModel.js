const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name_ar: {
      type: String,
      required: [true, "service required"],
     
      minlength: [3, "Too short service name"],
      maxlength: [32, "Too long service name"],
    },
    name_en: {
      type: String,
      required: [true, "service required"],
     
      minlength: [3, "Too short service name"],
      maxlength: [32, "Too long service name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    imageCover: {
      type: String,
      required: [true, "Service Image cover is required"],
    },

    commingSoon : Boolean ,
    
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
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.imageCover) {
    const imageUrl = `${process.env.BASE_URL}/services/${doc.imageCover}`;
    doc.imageCover = imageUrl;
  }
};

// findOne, findAll and update
serviceSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
serviceSchema.post("save", (doc) => {
  setImageURL(doc);
});

// 2-create model
const serviceModel = mongoose.model("service", serviceSchema);

module.exports = serviceModel;
