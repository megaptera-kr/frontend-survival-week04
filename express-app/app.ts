import express from 'express';
import cors from 'cors';

import RestaurantController from './src/controller/restaurant-controller';
import CategoryController from './src/controller/category-controller';
import OrderController from './src/controller/order-controller';

const port = 3000;
const app = express();

app.use(cors(), express.json());
app.get('/', (req, res) => res.send('Hello, World!'));

CategoryController(app);
RestaurantController(app);
OrderController(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
