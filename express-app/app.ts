// TODO: Express 를 이용하여 서버를 만들어 주세요.
import express from 'express';
import cors from 'cors';

import { restaurants } from './json/restaurants.json';

const port = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('헤헤');
});

app.get('/restaurants', (req, res) => {
  res.send({ restaurants });
});

app.post('/orders', (req, res) => {
  const id = Date.now().toString();
  const menu = req.body.cart;
  const totalPrice = req.body.cart.reduce(
    (acc: number, food: { price: number }) => acc + food.price,
    0,
  );

  const receipt = { id, menu, totalPrice };
  res.send({ receipt });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
