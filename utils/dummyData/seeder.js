const fs = require('fs');
require('colors');
const dotenv = require('dotenv');
const Projects = require('../../models/teamModel');
const dbConnection = require('../../config/database');
dotenv.config({ path: '../../config.env' });
// connect to DB
dbConnection();
// Read data
const project = JSON.parse(fs.readFileSync('./Team.json'));

// Insert data into DB
const insertData = async () => {
  try {
    await Projects.create(project);
    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
// Delete data from DB
const destroyData = async () => {
  try {
    await Projects.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};
// node seeder.js -d
if (process.argv[2] === '-i') {
  insertData();
} else if (process.argv[2] === '-d') {
  destroyData();
}