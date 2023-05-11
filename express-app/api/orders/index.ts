import { Router, type Request, type Response } from 'express';

const orderRouter = Router();

orderRouter
  .route('/')
  .post((req: Request, res: Response) => {
    const orderId = { id: Date.now().toString() };
    const resData = { ...orderId, ...req.body };
    res.json(resData);
  });

export default orderRouter;
