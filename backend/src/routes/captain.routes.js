import express from "express";
import { body } from "express-validator";
import {} from "../controllers/captain.controller.js";

const router = express.Router();

router.post(
  "/register-captain",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstName")
      .isLength({ min: 3 })
      .withMessage("FirstName must be min of 3 character"),
    body("password").isLength({ min: 6 }).withMessage("write a long password"),
    body("vehicle.plate").notEmpty().withMessage("Vehicle plate is required"),
    body("vehicle.vehicleType")
      .isIn(["car", "bike", "scooter"])
      .withMessage("Vehicle type must be car, bike, or scooter"),
  ],
  captainController,
);

// router.get("/",logoutUser);

export default router;
