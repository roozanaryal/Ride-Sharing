import userModel from "../models/user.model.js";
import * as userService from "../services/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    firstName: fullname.firstName,
    lastName: fullname.lastName,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ user, token });
};

export const loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      error: error.array(),
    });

  }
  const {email,password}=req.body;

  const user = await userModel.findOne({email}).select('+password')
  if(!user){
    return res.status(401).json({message:"Invalid email or password"})
  }
  const isMatched = await bcrypt.compare(password, user.password)
  if(!isMatched){
    return res.status(401).json({message:"Invalid email or password"})

  }

  const token = await user.generateAuthToken()
  
};
