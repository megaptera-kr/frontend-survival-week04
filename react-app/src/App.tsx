export default function App() {
  // fetch('http://localhost:3000/restaurants')
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))

  fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      menu: [
        { id: '10', name: '가라아게카레', price: 14000 },
        { id: '13', name: '닭가슴살카레', price: 13000 },
      ],
      totalPrice: 27000,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err, '에러'));

  return (
    <p>
      과제를 진행해 주세요.
    </p>
  );
}
