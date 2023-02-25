import Kiosk from './components/Kiosk';

import Restaurant from './types/Restaurants';

export default function App({ restaurants }: {restaurants: Restaurant[]}) {
  // const data = await fetch('http://localhost:9000/orders', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     menu: [
  //       { id: '10', name: '가라아게카레', price: 14000 },
  //       { id: '13', name: '닭가슴살카레', price: 13000 },
  //     ],
  //     totalPrice: 27000,
  //   }),
  // });

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <Kiosk restaurants={restaurants} />
    </>
  );
}
