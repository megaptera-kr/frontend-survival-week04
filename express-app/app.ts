import express, { Request } from 'express';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
}));

/** Body 를 JSON 으로 파싱한다. */
app.use(express.json());

app.get('/restaurants', (_, res) => {
  res.status(200).send({
    restaurants: [
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
    ],
  });
});

app.post('/orders', (req: Request<any, PostOrdersResponse, PostOrdersPayload>, res) => {
  const response: PostOrdersResponse = {
    id: Date.now().toString(),
    ...req.body,
  };

  res.status(201).send(response);
});

export interface PostOrdersPayload {
  /** 주문한 음식 목록 */
  menu: {
    /** 음식 아이디 */
    id: string;
    /** 음식 이름 */
    name: string;
    /** 음식 가격 */
    price: number;
  }[];
  /** 주문한 음식 총 가격 */
  totalPrice:number;
}

export interface PostOrdersResponse extends PostOrdersPayload {
  /** 주문 번호 */
  id: string;
}

app.listen(PORT, () => {
  console.log('Kiosk app listening on port 3000.');
});
