import { useRef } from 'react';

interface InputProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id, label, name, value, onChange,
}: InputProps) {
  const inputId = useRef(`input-${id}`);
  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '6px' }}>
      <label htmlFor={inputId.current}>{label}</label>
      <input id={inputId.current} name={name} value={value} onChange={onChange} />
    </div>
  );
}
