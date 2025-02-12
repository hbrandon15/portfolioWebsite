const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Handle clean URLs
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "projects.html"));
});

app.get("/photography", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "photography.html"));
});

// Fallback for other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
