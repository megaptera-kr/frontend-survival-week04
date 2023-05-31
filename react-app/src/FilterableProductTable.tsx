import { useState } from 'react';
import ListOfRestaurants from './ListOfRestaurants';
import SearchBar from './SearchBar';
import Carpe from './Carpe';

// import listofrestaurants from './restaurants.json';

// const lorr = listofrestaurants.restaurants;

type FPTProps = {
  lorr : {
    id: string;
    category: string;
    name: string;
    menu: {
        id: string;
        name: string;
        price: number;
    }[];
}[]
}

type Lunchbox =
  {
    id: string;
    name: string;
    price: number;
  }[]

  type ReceiptMenu = {
      id: string;
      name: string;
      price: number;
  }[]

export default function FilterableProductTable({ lorr } : FPTProps) {
  const [filterText, setFilterText] = useState<string>('');

  const [buttonClicked, setButtonClicked] = useState<string>('');

  const [selectedtwo, setSelectedtwo] = useState<Lunchbox>([]);

  console.log(selectedtwo);

  const totalPrice = selectedtwo.map((st) => (st.price)).reduce((prev, curr) => prev + curr, 0);

  console.log(totalPrice);

  const [receiptid, setReceiptid] = useState<string>('');

  console.log(receiptid);

  const [receiptmenu, setReceiptmenu] = useState<ReceiptMenu>([]);

  const [receiptprice, setReceiptprice] = useState<number>(0);

  const query = lorr.filter((rstr) => rstr.name.includes(filterText.trim()));

  const filteredRestaurants = (query.filter((rstr) => !buttonClicked
  || buttonClicked === '전체'
  || rstr.category === buttonClicked)
  );

  return (
    <div className="filterable-product-table">
        <>
      {selectedtwo.map((st, index) => (
        <div key={st.id}>
          {st.name}
          (
          {st.price}
          )
          <button
            type="button"
            onClick={() => {
              console.log('취소 clicked!');

              setSelectedtwo(selectedtwo.filter((value, indextwo) => indextwo !== index));
            }}
          >
            취소
          </button>
        </div>
      ))}
      </>
      <button
        type="button"
        onClick={async () => {
          console.log('주문 clicked!');

          const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              menu: selectedtwo.filter(((x) => x)),
              totalPrice,
            }),
          });

          console.log(response);

          const data = await response.json();

          console.log(data);

          setReceiptid(data.id);
          setReceiptmenu(data.menu);
          setReceiptprice(data.totalPrice);

          setSelectedtwo([]);
        }}
      >
        {`${totalPrice}`}
      </button>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
      <table className="product-table">
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <ListOfRestaurants
            lorr={filteredRestaurants}
            selectedtwo={selectedtwo}
            setSelectedtwo={setSelectedtwo}
          />
        </tbody>
      </table>
      <Carpe
        receiptid={receiptid}
        setReceiptid={setReceiptid}
        receiptmenu={receiptmenu}
        setReceiptmenu={setReceiptmenu}
        receiptprice={receiptprice}
        setReceiptprice={setReceiptprice}
      />

    </div>
  );
}
