const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    location_ar: { type: String, required: true },
    location_en: { type: String, required: true },

    text_ar: { type: String, required: true },
    text_en: { type: String, required: true },

    publisher: {
      type: String,
      required: [true, "Publisher is required"],
    },

    publishDate: {
      type: Date,
      required: [true, "Publish date is required"],
    },

    imageCover: {
      type: String,
      required: [true, "Blog Image cover is required"],
    },
  },
  { timestamps: true }
);

// تعديل رابط الصورة
const setImageURL = (doc) => {
  if (doc.imageCover) {
    doc.imageCover = `${process.env.BASE_URL}/blogs/${doc.imageCover}`;
  }
};

// findOne, findAll and update
blogsSchema.post("init", (doc) => {
  setImageURL(doc);
});

// create
blogsSchema.post("save", (doc) => {
  setImageURL(doc);
});

// 2-create model
const blogsModel = mongoose.model("blogs", blogsSchema);

module.exports = blogsModel;
  