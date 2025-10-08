import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import userRoute from "./routes/Userroute.js";
import orderRouter from "./routes/orderRoute.js";


console.log("PAYU_KEY loaded:", process.env.PAYU_KEY ? "Yes" : "No");
console.log("PAYU_SALT loaded:", process.env.PAYU_SALT ? "Yes" : "No");

console.log("userRoute:", userRoute);

//app config
const app = express();
const port = process.env.PORT ||  4000;
// trigger restart 3

//middleware
app.use(express.json());
app.use(cors());

//db connection
await connectdb();
//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/users", userRoute);
app.use("/api/order", orderRouter);
console.log("User routes registered");
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://root:toor@cluster0.kkmew6g.mongodb.net/?
