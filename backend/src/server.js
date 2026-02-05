import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import authRoutes from "./routes/captain.routes.js";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";


// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware
const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://localhost:5174",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5174",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/captain", captainRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res
    .status(200)
    .json({ status: "ok", dbStatus: mongoose.connection.readyState });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

// Start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

// Start the application
startServer();