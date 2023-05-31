import { ChangeEvent } from 'react';

type TextFieldProps = {
  label: string;
    placeholder: string;
    filterText: string;
    setFilterText: (value : string) => void;
}

export default function TextField({
  label, placeholder, filterText, setFilterText,
}: TextFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterText(value);
  };

  return (
    <>
      <label htmlFor="textfield-input">
        {label}
      </label>
      <input
        id="textfield-input"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </>
  );
}
