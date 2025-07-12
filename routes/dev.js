import express from "express";
import { getHomePage, getContactPage, getAboutPage } from "../controllers/DevController.js";

// init Router
const router = express.Router();

// routing
router.get("/dev", getHomePage);
router.get("/contact", getContactPage);
router.get("/about", getAboutPage);



router.post("/dev", (req, res) => {
  res.status(201).json(req.body);
});

// export router
export default router;
