// grocery/services/adminService.js

import { connection } from '../../database/connection';

export const removeGroceryItemById = async (itemId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM grocery_items WHERE id = ?';
    connection.query(query, [itemId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
