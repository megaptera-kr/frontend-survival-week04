import express from 'express';
import cors from 'cors';
import restaurants from './mocks/restaurants.json';

const port = 3000;
const app = express();
app.use(cors());

app.get('/restaurants', (req, res) => {
  res.status(200);
  res.send(restaurants);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
