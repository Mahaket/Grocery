
//import * as userService from '../services/userService';
import { userService } from "../../services/index.js";

export const placeOrder = async (req, res, next) => {
  try {
    const orderData = req.body.items;

    await userService.placeOrder(orderData);

    res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error in placeOrder controller:', error);
    next(error);
  }
};
