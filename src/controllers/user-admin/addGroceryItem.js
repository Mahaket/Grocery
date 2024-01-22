
import { adminService } from "../../services/index.js";

export const addGroceryItem = async (req, res, next) => {
  try {
    const reqBody = req.body;

    const itemName = reqBody.name;
    const itemPrice = reqBody.price;
    const itemQuantity = reqBody.quantity;

    const existingItem = await adminService.getGroceryItemByName(itemName);
    if (existingItem) {
      return res.status(400).json({ error: 'This name already exists. Please choose another name.' });
    }

    
    const insertedData = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
    };

    await adminService.addGroceryItem(insertedData);

    res.status(200).json({ message: 'Grocery item added successfully' });
  } catch (error) {
    console.error('Error in addGroceryItem controller:', error);
    next(error);
  }
};
