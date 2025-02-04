const mongoose = require("mongoose");
const dataConnection = () => {
  mongoose.connect(process.env.DB_URL).then((conn) => {
    console.log(`dataBase connected ${conn.connection.host}`);
  })
  .catch((err) =>{
  console.error(`dataBase error ${err}`);
  process.exit
},
  )}
module.exports = dataConnection;
