const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT;
const ROUTER = require("./API/routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("health check 100%");
});

app.use("/api", ROUTER)

app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});
