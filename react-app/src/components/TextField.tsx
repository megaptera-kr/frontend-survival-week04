import React, { useRef } from 'react';

type TextFieldProps = {
  label: string;
  placeholder: string;
  text: string;
  setText: (value: string) => void;
};

export default function TextField({
  label,
  placeholder,
  text,
  setText,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id.current} style={{ paddingRight: '1rem' }}>
        {label}
      </label>
      <input
        id={id.current}
        placeholder={placeholder}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
