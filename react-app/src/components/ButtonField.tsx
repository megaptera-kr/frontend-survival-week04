type ButtonFieldProps = {
  setFoodType : (value:string) => void
}

export default function ButtonField({ setFoodType }:ButtonFieldProps) {
  return (
    <div>
      <button type="button" onClick={() => { setFoodType('전체'); }}>전체</button>
      <button type="button" onClick={() => { setFoodType('중식'); }}>중식</button>
      <button type="button" onClick={() => { setFoodType('한식'); }}>한식</button>
      <button type="button" onClick={() => { setFoodType('일식'); }}>일식</button>
    </div>
  );
}
