const mongoose = require('mongoose')


const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'employee required'],
    unique: [true, 'employee must be unique'],
    minlength: [2, 'Too short employee name'],
    maxlength: [32, 'Too long employee name'],
  },
  slug: {
    type: String,
    lowercase: true,
  },
imageCover: {
      type: String,
      required: [true, 'Employee Image cover is required'],
    },
job : {
      type: String,
      required: [true, 'Employee job is required'],
      minlength: [5, 'Too short employee job'],
    },
  },
{ timestamps: true }
);

const setImageURL = (doc) => {
if (doc.image) {
  const imageUrl = `${process.env.BASE_URL}/team/${doc.image}`;
  doc.image = imageUrl;
}
};


// findOne, findAll and update
teamSchema.post('init', (doc) => {
setImageURL(doc);
});

// create
teamSchema.post('save', (doc) => {
setImageURL(doc);
});

// 2-create model
const teamModel = mongoose.model('team',teamSchema)

module.exports = teamModel