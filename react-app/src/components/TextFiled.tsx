import React from 'react';

type TextFiledProps = {
  label: string;
  placeholder: string;
  filterText: string;
  onChange: (value: string) => void;
};

function TextField({
  label,
  placeholder,
  filterText,
  onChange,
}: TextFiledProps) {
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  const id = `input-${label}`;

  return (
    <div className="input-filed">
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={filterText}
        onChange={onChangeText}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
