import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { join, resolve } from "path";
import devRouter from "./routes/dev.js";
import studentRouter from "./routes/student.js";;


// config env
dotenv.config();

// env vars
const PORT = process.env.PORT || 8080;

// init express
const app = express();

// init support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routing
app.use(devRouter);
app.use(studentRouter);



// static folder
app.use(express.static("public"));

// listen server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.black);
});
