import  express  from "express";
import { addAdmin, addminLogin, getAdminById, getAdmins } from "../controllers/admin-controller";

const adminRouter = express.Router();

adminRouter.post("/signup",addAdmin);
adminRouter.post("/login",addminLogin);
adminRouter.get("/",getAdmins);
adminRouter.get("/:id",getAdminById);

export default adminRouter;
