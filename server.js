const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "projects.html"));
});

app.get("/photography", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "photography.html"));
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
