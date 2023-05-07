import { Router } from 'express';

import restaurantsRouter from './restaurants';
import orderRouter from './orders';

const router = Router();

router.use('/restaurants', restaurantsRouter);
router.use('/orders', orderRouter);

export default router;
