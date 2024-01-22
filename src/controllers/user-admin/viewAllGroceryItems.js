import { adminService } from "../../services/index.js";

export const viewAllGroceryItems = async (req, res, next) => {
  try {
    const groceryItems = await adminService.getAllGroceryItems();

    res.status(200).json(groceryItems);
  } catch (error) {
    console.error('Error in viewAllGroceryItems controller:', error);
    next(error);
  }
};
