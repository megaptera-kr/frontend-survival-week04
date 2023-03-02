import { ChangeEvent } from 'react';

type PropTypes = {
  onChange: (value: string) => void;
  placeholder: string;
  inputValue: string;
  labelString: string;
};

export default function SearchInput({
  inputValue,
  onChange,
  placeholder = '',
  labelString = '',
}: PropTypes) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <div>
      <label htmlFor="input">{labelString}</label>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
