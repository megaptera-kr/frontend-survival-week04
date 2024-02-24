import { Express, Request, Response } from 'express';
import OrderType from '../types/OrderType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<OrderType>, res: Response) => {
    const order: OrderType = req.body;
    order.id = Date.now().toString();
    res.status(201).send(order);
  });
}

export default OrderController;
