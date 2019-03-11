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
    })
  }
})

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
    const project = await Projects.get(req.params.id);

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

router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Projects.update(req.params.id, req.body);

    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ message: "The Project could not be found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating the project"
    });
  }
});

// Post new action only if valid user ID exists
router.post("/:id/actions", async (req, res) => {
  try {
    // make sure valid user
    const project = await Projects.get(req.params.id);

    if (project) {
      const newAction = { ...req.body, project_id: req.params.id };
      const action = await Actions.insert(newAction);
      res.status(201).json(action);
    } else {
      res.status(404).json({ message: "Project id not found - cannot add action" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error adding the action."
    });
  }
});

module.exports = router;