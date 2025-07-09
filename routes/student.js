import express from "express";
import { getAllStudent, getSingleStudent } from "../controllers/StudentController.js";

// inti router
const router = express.Router();

// routing
router.get("/student", getAllStudent);
router.get("/student/:roll", getSingleStudent)

// export router
export default router;
