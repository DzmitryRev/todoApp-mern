require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Привет " + process.env.PORT);
});
