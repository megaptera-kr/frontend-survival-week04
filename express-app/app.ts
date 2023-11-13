// TODO: Express 를 이용하여 서버를 만들어 주세요.
import cors from 'cors';
import express from 'express';
import restaurants from './restaurants';

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('test');
});

app.get('/restaurants', (req, res) => {
  res.json({ restaurants });
});


app.post('/orders', (req, res) => {
  const { menu, totalPrice } = req.body;
  console.log(req.body);

  const result = {
    id: Date.now().toString(),
    menu,
    totalPrice,
  };

  res.status(201).send(result);
});

app.listen(port, () => [
  console.log('App listening'),
]);
