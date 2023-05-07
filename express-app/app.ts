import express, { type Request, type Response } from 'express';
import cors from 'cors';

import api from './api';

const port = 3000;

const app = express();

// CORS origin 설정
app.use(cors({
  origin: [
    'http://localhost:8080',
  ],
}));

// Request Body를 express에서 json으로 받아온다.
app.use(express.json());

app.use('/', api);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
