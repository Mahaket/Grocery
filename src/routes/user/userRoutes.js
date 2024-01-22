import { Router } from "express";
import { userController } from "../../controllers/index.js";


const userRouter = Router();

userRouter.get(
  "/view-groceries",
  userController.viewAllGroceryItems
);

userRouter.post(
  "/place-order",
  userController.placeOrder
);

export { userRouter };
