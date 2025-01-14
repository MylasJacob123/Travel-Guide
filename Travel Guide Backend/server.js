const express = require("express");
const cors = require("cors");
const app = express();

const dbRoutes = require("./routes/db");

const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use("/api", dbRoutes); //Data

app.use("/auth", authRoutes); //Auth

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});