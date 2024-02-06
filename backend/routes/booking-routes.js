import express from 'express'
import { deleteBookingById, getBookingById, newBooking } from '../controllers/booking-controller';

const bookingRouter = express.Router();

bookingRouter.post("/",newBooking);
bookingRouter.get("/:id",getBookingById);
bookingRouter.delete("/:id",deleteBookingById);

export default bookingRouter;