const express = require("express"); // importing a CommonJS module
const helmet = require("helmet"); // Security middleware

const projectsRouter = require("./data/helpers/projectModelRouter.js");
const actionsRouter = require("./data/helpers/actionModelRouter.js");

const server = express();

//next three lines invoke functions that return middleware
const parser = express.json();
const securityMiddleware = helmet();

server.use(parser, securityMiddleware);

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Sprint Challenge Node Express</h2>
    `);
});

module.exports = server;