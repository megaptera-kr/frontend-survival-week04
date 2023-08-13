import BasketList from './BasketList';
import TotalOrderButton from './TotalOrderButton';

export default function Basket() {
  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <BasketList />
      <TotalOrderButton />
    </div>
  );
}
