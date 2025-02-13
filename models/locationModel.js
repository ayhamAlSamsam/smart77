const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, " location is required"],
    },

    description: {
      type: String,
      required: [true, "location description is required"],
      minlength: [10, "Too short location description"],
    },
    imageCover: {
      type: String,
      required: [true, "location Imagecover is required"],
    },
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.imageCover) {
    const imageUrl = `${process.env.BASE_URL}/locations/${doc.imageCover}`;
    doc.imageCover = imageUrl;
  }
};

// findOne, findAll and update
locationSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
locationSchema.post("save", (doc) => {
  setImageURL(doc);
});

// 2-create model
const locationModel = mongoose.model("location", locationSchema);

module.exports = locationModel;
