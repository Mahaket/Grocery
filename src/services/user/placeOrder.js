
import { connection } from '../../database/connection';

export const placeOrder = async (orderData) => {
  return new Promise((resolve, reject) => {
    const orderQuery = 'INSERT INTO orders (item_id, quantity) VALUES ?';
    const orderValues = orderData.map((item) => [item.id, item.quantity]);

    connection.query(orderQuery, [orderValues], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
