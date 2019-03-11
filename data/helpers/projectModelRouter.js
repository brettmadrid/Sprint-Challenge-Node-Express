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

router.get("/:id", async (req, res) => {
  try {
    const project = await Projects.get(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving the project"
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: "Error adding the the project."
    });
  }
});

module.exports = router;