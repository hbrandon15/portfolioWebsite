const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Middleware to handle routes without file extensions
app.use((req, res, next) => {
  const filePath = path.join(__dirname, req.path + ".html");
  if (req.path === "/" || req.path === "/index") {
    res.sendFile(path.join(__dirname, "index.html"));
  } else if (req.path === "/about") {
    res.sendFile(path.join(__dirname, "about.html"));
  } else if (req.path === "/projects") {
    res.sendFile(path.join(__dirname, "projects.html"));
  } else if (req.path === "/photography") {
    res.sendFile(path.join(__dirname, "photography.html"));
  } else {
    next();
  }
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
