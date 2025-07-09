import express from "express";
import {getAllDevelopers, createDev} from "../controllers/DevController.js";


// init Router
const router = express.Router();


// routing
router.get("/dev", getAllDevelopers);
router.post("/dev", createDev);

router.post("/dev", (req, res) => {
    res.status(201).json(req.body);
})


// export router
export default router;