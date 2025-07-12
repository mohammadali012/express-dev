import express from "express";
import {loadStaffPage, loadMenuPage, loadHomePage} from "../controllers/PageController.js";

// inti router
const router = express.Router();

// routing
router.get("/staff", loadStaffPage);
router.get("/menu", loadMenuPage);
router.get("/", loadHomePage);

// export router
export default router;
