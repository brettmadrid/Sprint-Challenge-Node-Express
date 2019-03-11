const express = require("express");
//const cors = require("cors");

const Projects = require("./projectModel.js");

const router = express.Router();
//router.use(cors());

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving projects"
    });
  }
});

module.exports = router;