
import { connection } from '../../database/connection';

export const getGroceryItemByName = async (itemName) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM grocery_items WHERE name = ?';
    connection.query(query, [itemName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};