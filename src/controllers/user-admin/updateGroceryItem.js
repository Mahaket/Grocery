

import { adminService } from "../../services/index.js";

export const updateGroceryItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const { name, price } = req.body;

    const updatedData = {
      name: name,
      price: price,
      // Add other fields as needed
    };

    await adminService.updateGroceryItemById(itemId, updatedData);

    res.status(200).json({ message: 'Grocery item updated successfully' });
  } catch (error) {
    console.error('Error in updateGroceryItem controller:', error);
    next(error);
  }
};

