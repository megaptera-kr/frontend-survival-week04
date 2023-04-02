import express from 'express';
import cors from 'cors'
import restaurantsJson from './data/restaurants.json'

const app = express();

app.use(cors())
app.use(express.json())

app.get('/restaurants', (_, res) => {
	res.status(200).send({ restaurants: restaurantsJson.restaurants });
});

app.post('/orders', (req, res) => {
  const clientOrders = req.body

  res.status(201).send({
    id: Date.now().toString(),
    ...clientOrders
  })
})

app.listen(3000);