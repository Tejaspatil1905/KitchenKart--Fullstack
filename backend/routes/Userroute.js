import express from "express";
import { registerUser, loginUser } from "../controllers/usercontrollers.js";

console.log("Userroute loaded");
const userRoute = express.Router();

console.log("registerUser:", typeof registerUser);
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/test", (req, res) => {
  console.log("Test route hit for /api/users/test");
  res.send("test");
});

export default userRoute;
