require('dotenv').config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
