import mongoose, { Types } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "Firstname must be 3 character"],
    },
    lastName: {
      type: String,
      minlength: [3, "Lastname must be 3 character"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  socketId: {
    type: String,
    default: null,
  },
  vehicle: {
    colour: {
      type: String,
    },
    plate: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "scooter"],
      required: true,
    },
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  location: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const Captain = mongoose.model("Captain", captainSchema);
export default Captain;
