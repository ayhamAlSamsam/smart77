const mongoose = require('mongoose')


const partnerSchema = new mongoose.Schema({
    logo: {
      type: String,
      required: [true, 'partner logo is required'],
    },
  },
{ timestamps: true }
);

const setImageURL = (doc) => {
if (doc.logo) {
  const imageUrl = `${process.env.BASE_URL}/partners/${doc.logo}`;
  doc.logo = imageUrl;
}
};


// findOne, findAll and update
partnerSchema.post('init', (doc) => {
setImageURL(doc);
});

// create
partnerSchema.post('save', (doc) => {
setImageURL(doc);
});

// 2-create model
const partnerModel = mongoose.model('partner',partnerSchema)

module.exports = partnerModel