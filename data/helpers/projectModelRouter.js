const express = require("express");
//const cors = require("cors");

const Projects = require("./projectModel.js");
const Actions = require("./actionModel.js");

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

router.delete("/:id", async (req, res) => {
  try {
    // first check to see if user id exists
    const id = req.params.id;
    const project = await Projects.get(id);

    if (project) {
      await Actions.removeProjectActions(id);
      await Projects.remove(id);
      res.status(200).json({removed: project});
    } else {
      res.status(404).json({ err: "The id of the project could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      err: "Error removing the project. Check to see if project exists!"
    });
  }
});

module.exports = router;