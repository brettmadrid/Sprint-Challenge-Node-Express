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

module.exports = router;