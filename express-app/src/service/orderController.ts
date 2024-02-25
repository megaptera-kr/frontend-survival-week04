import { Express, Request, Response } from 'express';
import { Order } from '../types/order';

export default function OrderController(app: Express) {
  app.post('/orders', (req: Request<Order>, res: Response) => {
    const order: Order = req.body;

    if (!order.menu) {
      res.status(400).send('주문 목록이 없습니다.');
      return;
    }
    order.id = Date.now().toString();
    res.status(201).send(order);
  });
}

