import { Express } from 'express';
import restaurants from '../db/table-restaurants';


export default function RestaurantController(app: Express) {
  app.get('/restaurants', (req, res) => {

    res.send(restaurants);
  });
}