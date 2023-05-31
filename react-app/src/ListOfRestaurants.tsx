import { useState } from 'react';

type LORProps = {
  lorr: {
    id: string;
    category: string;
    name: string;
    menu: {
        id: string;
        name: string;
        price: number;
    }[];
}[]

selectedtwo: {
  id: string;
  name: string;
  price: number;
}[]

setSelectedtwo: (value: {
  id: string;
  name: string;
  price: number;
}[]) => void;

}

export default function ListOfRestaurants({
  lorr, selectedtwo, setSelectedtwo,
}: LORProps) {
  const [count, setCount] = useState<number>(0);

  console.log(count);
  return (
    <>
      {lorr.map((rstr) => (
        <tr key={rstr.id}>
          <td>{rstr.name}</td>
          <td>{rstr.category}</td>
          <td>
            {rstr.menu.map((mn) => (
              <tr key={mn.id}>
                <td>{mn.name}</td>
                <td>
                  (
                  {mn.price}
                  )
                </td>
                <td key={mn.id}>
                <button
                  type="button"
                  name={mn.name}
                  onClick={() => {
                    console.log(`${mn.name} clicked!`);

                    const selected = { id: mn.id, name: mn.name, price: mn.price };

                    setSelectedtwo([...selectedtwo, selected]);
                  }}

                >
                  선택
                </button>
                </td>
              </tr>
            ))}
          </td>
        </tr>
      ))}
    </>
  );
}
