const express = require("express");
const path = require('path');
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require('cors')
const dataConnection = require("./config/dataBase");
dotenv.config({ path: "config.env" });
const app = express();
//Routes
const ServiceRoute = require("./routes/serviceRoute");
const TeamRoute = require("./routes/teamRoute");
const UserRoute = require("./routes/userRoute");
const AuthRoute = require("./routes/authRoute");
const ProjectRoute = require("./routes/projectRoute");
const BlogsRoute = require("./routes/blogsRoute");
const contactRoute = require("./routes/contactRoute");
const locationRoute = require("./routes/locationRoute");
const partnerRoute = require("./routes/partnerRoute");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.urlencoded({ extended: true })); 

dataConnection();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

const PORT = process.env.PORT || 9000;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
  // mount routes

  app.use("/api/v1/service", ServiceRoute);
  app.use("/api/v1/team", TeamRoute);
  app.use("/api/v1/user", UserRoute);
  app.use("/api/v1/auth", AuthRoute);
  app.use("/api/v1/project", ProjectRoute);
  app.use("/api/v1/blogs", BlogsRoute);
  app.use("/api/v1/contact", contactRoute);
  app.use("/api/v1/location", locationRoute);
  app.use("/api/v1/partner", partnerRoute);
});
// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
