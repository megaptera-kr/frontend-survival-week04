import { Express } from 'express';

import restaurants from '../database/table-restaurant';

function CategoryController(app: Express) {
  app.get('/categories', (req, res) => {
    const uniqueCaterogies = new Set();
    restaurants.forEach((restaurant) => {
      uniqueCaterogies.add(restaurant.category);
    });
    const categories = Array.from(uniqueCaterogies).map((item, i) => ({
      [(i + 1).toString()]: item,
    }));

    res.send(categories);
  });
}

export default CategoryController;
