import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PATH } from '../common';
import { getRestaurants } from './routes/restaurants';
import { postOrders } from './routes/orders';

const initServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.listen('3001', () => {
    console.log('START');
  });

  app.get(`/${PATH.restaurants}`, getRestaurants);
  app.post(`/${PATH.orders}`, postOrders);

  return app;
};

initServer();
