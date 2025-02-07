const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: [true, " location is required"],
    },
    imageCover: {
      type: String,
      required: [true, "location Image cover is required"],
    },
    description: {
      type: String,
      required: [true, "location description is required"],
      minlength: [20, "Too short location description"],
    },
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/location/${doc.image}`;
    doc.image = imageUrl;
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
