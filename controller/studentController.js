const express = require("express");
const student = express.Router();
const {
  getAllStudent,
  addStudent,
  deleteStudent,
  editStudent,
} = require("../model/studentModel");

//route untuk mendapatkan semua data
student.get("/", (req, res) => {
  getAllStudent()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

student.post("/add", (req, res) => {
  //kita ambil data dari request body
  const requestData = req.body;

  addStudent(requestData)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

student.delete("/delete/:id", (req, res) => {
  // kita tangkap id dari url parameternya
  const id = req.params.id;

  deleteStudent(id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

student.patch("/edit/:id", (req, res) => {
  //kita tangkap params id
  const id = req.params.id;
  const data = req.body;

  editStudent(id, data)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});

module.exports = student;
