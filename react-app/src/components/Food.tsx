interface FoodProps {
  name: string;
  price: number;
  // eslint-disable-next-line react/require-default-props
  onClick?: () => void;
}

export default function Food({ name, price, onClick }: FoodProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', columnGap: '4px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{`이름: ${name}`}</span>
        <span>{`가격: ${price.toLocaleString()}`}</span>
      </div>
      {onClick && <button type="button" name={`#${name}`} onClick={onClick}>선택</button>}
    </div>
  );
}
