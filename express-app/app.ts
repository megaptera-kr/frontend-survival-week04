import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3000;

const jsonFile = fs.readFileSync('./restaurants.json', 'utf-8');

app.use(cors());
app.use(express.json());

app.get('/restaurants', (req, res) => {
  const restaurants = JSON.parse(jsonFile);
  res.status(200).json(restaurants);
});

app.post('/orders', (req, res) => {
  const orders = {
    id: Date.now().toString(),
    ...req.body,
  };
  res.status(201).json(orders);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
