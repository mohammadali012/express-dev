import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { join, resolve } from "path";
import pageRouter from "./routes/page.js";
import expressEJSLayout from "express-ejs-layouts";



// config env
dotenv.config();

// env vars
const PORT = process.env.PORT || 8080;

// init express
const app = express();

// init support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressEJSLayout);


// set ejs support
app.set("view engine", "ejs");

// Routing
app.use(pageRouter);




// static folder
app.use(express.static("public"));

// listen server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgCyan.black);
});
