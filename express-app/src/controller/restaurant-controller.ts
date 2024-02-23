import { Express } from 'express';

import restaurants from '../database/table-restaurant';

import Restaurant from '../types/RestaurantType';

function RestaurantController(app: Express) {
  app.get('/restaurants', (req, res) => {
    const { restaurantName, categoryName } = req.query;

    const filteredRestaurants = restaurants.filter((restaurant: Restaurant) => {
      const isCategoryMatch =
        !categoryName || restaurant.category === categoryName;
      const isNameMatch =
        !restaurantName || restaurant.name.includes(restaurantName?.toString());
      return isNameMatch && isCategoryMatch;
    });

    res.send(filteredRestaurants);
  });

  app.get('/restaurants/:id', (req, res) => {
    const restaurant: Restaurant | undefined = restaurants.find(
      (item: Restaurant) => item.id === req.params.id,
    );

    if (!restaurant) {
      res.status(404).send('Restaurant not found');
    } else {
      res.send(restaurant);
    }
  });
}

export default RestaurantController;
