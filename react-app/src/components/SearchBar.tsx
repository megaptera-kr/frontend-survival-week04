import ButtonField from './ButtonField';
import PostField from './PostField';
import TextField from './TextField';
import { MenuItem } from '../type/menu';

type SearchBarProps = {
receipt : MenuItem[],
setReceipt : (value : MenuItem[]) => void,
inputText : string,
setInputText : (value:string) => void,
setFoodType : (value:string) => void

}

export default function SearchBar({
  receipt, setReceipt, inputText, setInputText, setFoodType,
}:SearchBarProps) {
  return (
    <div style={{ border: '2px solid #222' }}>
      <div>
        <h1>푸드코트 키오스크</h1>
        <h3>점심 바구니</h3>
      </div>
      {
        receipt.map((menu) => (
          <div key={menu.id}>
            <span>
              {menu.name}
              {menu.price}
            </span>
          </div>
        ))
      }
      <PostField receipt={receipt} setReceipt={setReceipt} />
      <TextField inputText={inputText} setInputText={setInputText} />
      <ButtonField setFoodType={setFoodType} />
    </div>
  );
}
