// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log");
});

const logsController = require("./controllers/logsController")
app.use("/logs", logsController)


// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).json({error:"Page not found"});
  });

// EXPORT
module.exports = app;