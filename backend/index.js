import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/authRoute.js";
import tourRoute from "./routes/tourRoute.js";
import userRoute from "./routes/userRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import bookingRoute from "./routes/bookingRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// connect db
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (error) {
    console.error("MongoDB database connection failed:", error.message);
  }
};

// for testing
app.get("/", (req, res) => {
  res.send("Api is working");
});

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// api
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
