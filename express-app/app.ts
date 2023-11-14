import { ROUTES } from '../common';
import initServer from './initServer';
import { getRestaurants } from './routes/restaurants';
import { postOrders } from './routes/orders';

const app = initServer();

app.get(ROUTES.restaurants, getRestaurants);
app.post(ROUTES.orders, postOrders);
