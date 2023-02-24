import express from 'express';

const router = express.Router();

router.post('/', (req, res) => res.status(201).send({ id: new Date().getTime(), ...req.body }));

export default router;
