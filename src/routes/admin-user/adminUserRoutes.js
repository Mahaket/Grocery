import { Router } from "express";
import { adminController } from "../../controllers/index.js";


const adminUserRouter = Router();

adminUserRouter.get(
  "/view-groceries",
  adminController.viewAllGroceryItems
);

adminUserRouter.delete(
  "/remove-grocery/:id",
  adminController.removeGroceryItem
);

adminUserRouter.put(
  "/manage-inventory/:id",
  adminController.updateGroceryItem
);

adminUserRouter.post(
  "/add-grocery",
  adminController.addGroceryItem
);


export { adminUserRouter };
