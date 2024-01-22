
import { connection } from '../../database/connection';

export const addGroceryItem = async (groceryData) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO grocery_items SET ?';
    connection.query(query, [groceryData], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};