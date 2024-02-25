import express from 'express';
import cors from 'cors';
import RestaurantController from './src/service/restaurants-controller';


const port = 8080;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

RestaurantController(app)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
