// server/server.js
const express = require("express");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use your routes
app.use("/api", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
