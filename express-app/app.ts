// TODO: Express 를 이용하여 서버를 만들어 주세요.
import express from 'express';
import cors from 'cors';

const port = 3000;

const app = express();

// CORS origin 설정
app.use(cors({
  origin: [
    'http://localhost:8080',
  ],
}));

// 이 미들웨어 함수는 경로를 정의하기 전에 호출
// JSON 페이로드가 포함된 수신 요청은 이 미들웨어에 의해 자동으로 구문 분석되며 결과 개체는 req.body 개체에서 사용 가능
app.use(express.json());

app.get('/restaurants', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  const restaurants = {
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
          { id: '9', name: '컵라면', price: 2000 },
        ],
      },
      {
        id: '3',
        category: '한식',
        name: '데브부엌',
        menu: [
          { id: '10', name: '제육덮밥', price: 10000 },
          { id: '11', name: '닭떡국', price: 9000 },
          { id: '12', name: '닭개장', price: 11000 },
          { id: '13', name: '돈까스', price: 1000 },
        ],
      },
      {
        id: '4',
        category: '일식',
        name: '로드스시',
        menu: [
          { id: '14', name: '모듬초밥', price: 14000 },
          { id: '15', name: '특선초밥', price: 17900 },
          { id: '16', name: '스페셜초밥', price: 21000 },
        ],
      },
      {
        id: '5',
        category: '일식',
        name: '혹등고래카레',
        menu: [
          { id: '17', name: '기본카레', price: 9000 },
          { id: '18', name: '가라아게카레', price: 14000 },
          { id: '19', name: '소시지카레', price: 13000 },
          { id: '20', name: '돈까스카레', price: 14000 },
          { id: '21', name: '닭가슴살카레', price: 13000 },
        ],
      },
      {
        id: '6',
        category: '한식',
        name: '메가김치찌개',
        menu: [
          { id: '22', name: '김치찌개1인', price: 8000 },
          { id: '23', name: '된장찌개', price: 8000 },
          { id: '24', name: '계란말이', price: 6000 },
        ],
      },
    ],
  };

  res.send(restaurants);
});

app.post('/orders', (req, res) => {
  const request = req.body;
  request.id = Date.now().toString();

  res.send(request);
});

app.listen(port, () => {
  console.log(`Server running a http://localhost:${port}`);
});
