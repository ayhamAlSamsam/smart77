const mongoose = require("mongoose");
const slugify = require("slugify");

const teamSchema = new mongoose.Schema(
  {
    name_ar: {
      type: String,
      required: [true, "Employee required"],
      minlength: [2, "Too short employee name"],
      maxlength: [32, "Too long employee name"],
    },
    name_en: {
      type: String,
      required: [true, "Employee required"],
      minlength: [2, "Too short employee name"],
      maxlength: [32, "Too long employee name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    imageCover: {
      type: String,
      required: [true, "Employee Image cover is required"],
    },
    job_ar: {
      type: String,
      required: [true, "Employee job is required"],
      minlength: [3, "Too short employee job"],
    },
    job_en: {
      type: String,
      required: [true, "Employee job is required"],
      minlength: [3, "Too short employee job"],
    },
  },
  { timestamps: true }
);

teamSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  if (update.name_en) {
    update.slug = slugify(update.name_en, { lower: true, strict: true });
  }
  next();
});

const setImageURL = (doc) => {
  if (doc.imageCover) {
    const imageUrl = `${process.env.BASE_URL}/team/${doc.imageCover}`;
    doc.imageCover = imageUrl;
  }
};

teamSchema.post("init", (doc) => {
  setImageURL(doc);
});

// تحديث الصورة عند حفظ البيانات
teamSchema.post("save", (doc) => {
  setImageURL(doc);
});

// 2-إنشاء المودل
const teamModel = mongoose.model("team", teamSchema);

module.exports = teamModel;
