const express = require("express");
require("dotenv").config()
const app = express();
const router = require("./routes/routes");
const path = require("path");
const connect = require("./database/mongo");


app.use(express.json());
app.use(express.static("public"));
app.use("/" , router);


const port = 5500;

app.listen(port, console.log("Server ON"));
