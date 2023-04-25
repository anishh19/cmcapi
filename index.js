const express = require("express");
const dotenv = require("dotenv").config();
var cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use("/", require("./routes/cmc"));

app.listen(port, () => console.log("Listening on port :", port));
