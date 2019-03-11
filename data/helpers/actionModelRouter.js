const express = require("express");
//const cors = require("cors");

const Actions = require("./actionModel.js");

const router = express.Router();
//router.use(cors());

router.get("/", async (req, res) => {
  try {
    const action = await Actions.get();
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving actions"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving action"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const action = await Actions.remove(req.params.id);

    if (action) {
      res.status(200).json({ message: "The action has been deleted" });
    } else {
      res.status(404).json({ message: "The id could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error removing the action"
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Actions.update(req.params.id, req.body);
    updated
      ? res.status(200).json(updated)
      : res.status(404).json({ message: "The post cannot be found!" });
  } catch (error) {
    res.status(500).json({ message: "Post info could not be modified" });
  }
});

module.exports = router;