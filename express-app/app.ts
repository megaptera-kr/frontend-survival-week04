import express from 'express';
import cors from 'cors';

import restaurantsRouter from './src/routes/restaurants';
import ordersRouter from './src/routes/orders';

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/restaurants', restaurantsRouter);
app.use('/orders', ordersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
