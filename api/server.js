const express = require('express');
const fs = require('fs');
const path= require('path');

const app = express();
const HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// list all buildings endpoint
app.get('/buildings', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/buildings.json'), (err, json) => {
    if (err) {
      res.status(500);
      // File read error
      res.json({
        error: err.message,
      });
    }

    try {
      res.json(JSON.parse(json));
    } catch (e) {
      res.status(500);
      // JSON error
      res.json({
        error: e.message,
      });
    }
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({"message":"Ok"})
});

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});
