import React, { useRef } from 'react';

type TextFieldProps = {
  label: string;
  setFilterText: (value: string) => void;
}

export default function TextField({
  label,
  setFilterText,
}: TextFieldProps) {
  const id = useRef(`input-${label}`);
  const handleChange = (event:
    React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  return (
    <div>
      <label
        htmlFor={id.current}
        style={{ paddingRight: '1rem' }}
      >
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder="식당 이름"
        onChange={handleChange}
      />
    </div>
  );
}
