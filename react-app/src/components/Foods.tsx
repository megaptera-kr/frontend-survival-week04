import Food from '../types/Food';

type FoodsProps = {
  foods: Food[];
};

function Foods({ foods }: FoodsProps) {
  return (
    <ul style={{ listStyle: 'none', textAlign: 'center' }}>
      {foods.map((food: Food) => {
        const { name, price } = food;
        return (
          <li key={name}>
            <span>{`${name}(${price})`}</span>
            <button type="button">선택</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Foods;
