import express from 'express';
import cors from 'cors';
import restaurants from './mocks/restaurants.json';

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get('/restaurants', (req, res) => {
  res.status(200);
  res.send(restaurants);
});

app.post('/orders', (req, res) => {
  const { menu, totalPrice } = req.body;

  res.status(201);
  res.send({
    id: Date.now().toString(),
    menu,
    totalPrice,
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
