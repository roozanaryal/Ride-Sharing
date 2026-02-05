import express from "express";
import { body } from "express-validator";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("FirstName must be min of 3 character"),
    body("password").isLength({ min: 6 }).withMessage("write a long password"),
    body("vehicle.plate").notEmpty().withMessage("Vehicle plate is required"),
    body("phoneNumber")
      .isLength({ min: 10, max: 15 })
      .withMessage("Phone number must be between 10 and 15 digits"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "scooter"])
      .withMessage("Vehicle type must be car, bike, or scooter"),
  ],
  registerCaptain,
);

// router.get("/",logoutUser);

export default router;
