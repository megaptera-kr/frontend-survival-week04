import express from 'express';
import cors from 'cors';
import RestaurantController from './src/service/restaurantsController';
import OrderController from './src/service/orderController';


const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

RestaurantController(app)
OrderController(app)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
