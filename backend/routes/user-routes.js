import express from 'express';
import { signup, deleteUser, getAllUsers, getBookingofUser, login, updateUser, getUserById } from '../controllers/user-controller';

const userRouter = express.Router();

userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUserById)
userRouter.post("/signup",signup);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id",deleteUser);
userRouter.post("/login",login);
userRouter.get("/bookings/:id",getBookingofUser);


export default userRouter;
