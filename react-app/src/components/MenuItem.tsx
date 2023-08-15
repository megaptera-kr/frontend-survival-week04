import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';

export default function MenuItem({
  food,
  isButtonHidden = false,
}: {
  food: Food;
  isButtonHidden: boolean;
}) {
  const [selectedFoods, setSelectFood] = useLocalStorage<Food[]>('cart', []);
  const { name, price } = food;

  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>{`${name}(${price}원)`}</span>
      {!isButtonHidden && (
        <button
          name={`#${name}`}
          type="button"
          style={{ marginLeft: '0.5rem' }}
          onClick={() => setSelectFood([...selectedFoods, food])}
        >
          선택
        </button>
      )}
    </li>
  );
}
