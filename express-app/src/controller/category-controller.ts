import { Express } from 'express';

import restaurants from '../database/table-restaurant';

import Category from '../types/CategoryType';

function CategoryController(app: Express) {
  app.get('/categories', (req, res) => {
    const uniqueCaterogies = new Set();
    restaurants.forEach((restaurant) => {
      uniqueCaterogies.add(restaurant.category);
    });
    const categories: Category[] = Array.from(uniqueCaterogies).map(
      (item, i) => ({
        id: i + 1,
        name: item as string,
      }),
    );

    res.send(categories);
  });
}

export default CategoryController;
