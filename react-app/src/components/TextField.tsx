import { useRef } from 'react';

type TextFieldProps = {
    label: string;
    placeholder: string;
    filterText: string;
    setFilterText: (text: string) => void;
}

export default function TextField({
  label, placeholder, filterText, setFilterText,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  return (
    <>
      <label htmlFor={id.current}>{label}</label>
      <input
        type="text"
        id={id.current}
        value={filterText}
        placeholder={placeholder}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </>
  );
}
