import express from 'express';

const router = express.Router();

router.post('/', (req, res) => res.status(201).send({ receipt: { id: new Date().getTime(), ...req.body } }));

export default router;
