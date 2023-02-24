// TODO: Express 를 이용하여 서버를 만들어 주세요.

import express from 'express';

const port = 3000;

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// 식당 목록 조회
app.get('/restaurants', (request, response) => {
  const restaurants = [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menu: [
        { id: '1', name: '짜장면', price: 8000 },
        { id: '2', name: '짬뽕', price: 8000 },
        { id: '3', name: '차돌짬뽕', price: 9000 },
        { id: '4', name: '탕수육', price: 14000 },
      ],
    },
    {
      id: '2',
      category: '한식',
      name: '메리김밥',
      menu: [
        { id: '5', name: '김밥', price: 3500 },
        { id: '6', name: '참치김밥', price: 4500 },
        { id: '7', name: '제육김밥', price: 5000 },
        { id: '8', name: '훈제오리김밥', price: 5500 },
      ],
    },
    {
      id: '3',
      category: '일식',
      name: '혹등고래카레',
      menu: [
        { id: '9', name: '기본카레', price: 9000 },
        { id: '10', name: '가라아게카레', price: 14000 },
        { id: '11', name: '소시지카레', price: 13000 },
        { id: '12', name: '돈까스카레', price: 14000 },
        { id: '13', name: '닭가슴살카레', price: 13000 },
      ],
    },
  ];

  response
    .status(200)
    .send({ restaurants });
});

// 주문 생성
app.post('/orders', (request, response) => {
  const order = request.body();

  const id = Date.now().toString();

  response
    .status(201)
    .send({ id, ...order });
});
