import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routes/admin-routes";
import bookingRouter from "./routes/booking-routes";
import movieRouter from "./routes/movie-routes";
import userRouter from "./routes/user-routes";
import cors from 'cors';
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/movie",movieRouter);
app.use("/booking",bookingRouter);

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL)
.then(() => app.listen(5000,() => console.log("Connected to Database")

)).catch((e) => console.log(e));


