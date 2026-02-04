import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { body } from "express-validator";
// import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstName').isLength({ min: 3 }).withMessage("FirstName must be min of 3 character"),
    body('password').isLength({ min: 6 }).withMessage("write a long password")

], registerUser);


export default router;