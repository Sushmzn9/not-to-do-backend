import express from "express";
const router = express.Router();

const fakeDb = [
  { task: "watching Tv", hr: 33, type: "entry", _id: "ase3" },
  { task: "vcx Tv", hr: 33, type: "entry", _id: "gg" },
  { task: "asdcv Tv", hr: 33, type: "entry", _id: "cxz" },
];

//Read data from database and return to the client
router.get("/", (req, res) => {
  res.json({
    message: "todo do Get method",
    data: fakeDb,
  });
});

//Receive data from client and Create new record into the database
router.post("/", (req, res) => {
  console.log("got hit", req.body);
  fakeDb.push(req.body);
  res.json({
    message: "New task has been added",
  });
});

//update record into the database based on the information received
router.patch("/", (req, res) => {
  console.log(req.body);
  const { _id, type } = req.body;

  fakeDb.map((item) => {
    if (item._id === _id) {
      return { ...item, type };
    }
    return item;
  });
  res.json({
    status: "success",
    message: "task has been switched",
  });
});
console.log(fakeDb);
//deleted one or many records from the database based on the information received
router.delete("/", (req, res) => {
  const { _id } = req.body;
  console.log(_id);
  //delete
  fakeDb - fakeDb.filter((item) => item._id !== _id);
  res.json({
    message: "This item is deleted",
    _id,
  });
});
export default router;
