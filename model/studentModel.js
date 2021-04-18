const db = require("./connection");

// melihat semua data absen
const getAllStudent = async () => {
  return await db("absens")
    .select("*")
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

//menambahkan data absen
const addStudent = async (data) => {
  return await db("absens")
    .insert(data)
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

//delete data absen lewat request params
const deleteStudent = async (reqId) => {
  return await db("absens")
    .where({ id: reqId })
    .del()
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

//edit data berdasarkan id
const editStudent = async (reqId, data) => {
  return await db("absens")
    .where({ id: reqId })
    .update(data)
    .then((result) => {
      return result;
    })
    .catch((err) => console.log(err));
};

module.exports = { getAllStudent, addStudent, deleteStudent, editStudent };
