import { Router } from "express";
import { adminUserRouter } from "./hospital/hospitalRoutes.js";
import { userRouter } from "./hospital/hospitalRoutes.js";

const mainRouter = Router();

mainRouter.use("/admin", adminUserRouter);
mainRouter.use("/user", userRouter);

export { mainRouter };
