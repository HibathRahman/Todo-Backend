const express = require("express");
const router = express.Router();
const todoList = require("../models/TodoSchema");

router.post("/", async (req, res) => {
  try {
    if (!req.body.item) {
      res.send(500).send("Fill the require feild");
    }
    const newItem = { item: req.body.item, checked: false };
    const list = await todoList.create(newItem);
    return res.status(200).send(list);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
//  get all list
router.get("/", async (req, res) => {
  try {
    const list = await todoList.find();
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});
// get one list
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const onelist = await todoList.findById(id);
    res.status(200).json(onelist);
  } catch (err) {
    console.log(err);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.checked) {
      return res.status(500).send("Fill the require feild");
    } 
    const { id } = req.params;
    const result = await todoList.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send("List Not Found");
    } else {
      return res.status(200).send("List updated successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

// DELETE data
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await todoList.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("list Not Found");
    } else {
      return res.status(200).send("List Deleted Successfully");
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
});

module.exports = router;
