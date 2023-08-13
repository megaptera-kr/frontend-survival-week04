import { useRef } from 'react';

type TextFieldProps = {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export default function TextField({
  label,
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  const id = useRef(`input-${Math.random()}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label
        htmlFor={id.current}
        style={{
          paddingRight: '1rem',
        }}
      >
        {label}
      </label>
      <input
        id={id.current}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
