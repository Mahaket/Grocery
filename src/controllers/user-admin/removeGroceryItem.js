
import { adminService } from "../../services/index.js";

export const removeGroceryItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    await adminService.removeGroceryItemById(itemId);

    res.status(200).json({ message: 'Grocery item removed successfully' });
  } catch (error) {
    console.error('Error in removeGroceryItem controller:', error);
    next(error);
  }
};
