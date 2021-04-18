//import dependencies yang dibutuhkan
const express = require("express");
const cors = require("cors");
const app = express();
const student = require("./controller/studentController");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//pakai server middleware
app.use("/api/absens", student);

//listener
app.listen(8000, () => {
  console.log("listen port 8000");
});
