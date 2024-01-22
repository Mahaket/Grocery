
import * as userService from '../services/userService';

export const viewAllGroceryItems = async (req, res, next) => {
  try {
    const groceryItems = await userService.getAllGroceryItems();

    res.status(200).json(groceryItems);
  } catch (error) {
    console.error('Error in viewAllGroceryItems controller:', error);
    next(error);
  }
};
