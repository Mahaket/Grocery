
import { connection } from '../../database/connection';

export const getAllGroceryItems = async () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM grocery_items';
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
