import express from 'express';
import cors from 'cors';

import { restaurants } from './data/restaurants.json';

const port = 3005;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/restaurants', (req, res) => {
  const data = {
    msg: 'success to get data',
    data: restaurants,
  };
  res.send({ data });
});

app.post('/orders', (req, res) => {
  const { orders, totalPrice } = req.body;
  const data = {
    orders,
    totalPrice,
    receiptNo: Date.now().toString(),
  };
  res.send({ data });
});

app.listen(port, () => {
  console.log(`server opend at ${port} port`);
});
