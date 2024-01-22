
import { connection } from '../../database/connection';

export const updateGroceryItemById = async (itemId, updatedData) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE grocery_items SET ? WHERE id = ?';
    connection.query(query, [updatedData, itemId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
