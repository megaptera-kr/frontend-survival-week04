import { useState } from 'react';

type TextFieldProps = {
  inputText: string,
  setInputText: (value:string)=>void
}

export default function TextField({ inputText, setInputText }: TextFieldProps) {
  function handleText(e:React.ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  return (
    <div>
      <label>
        {' '}
        검색
        <input type="text" placeholder="식당 이름" value={inputText} onChange={handleText} />
      </label>
    </div>
  );
}
