import { useRef } from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function RadioButton({
  id, name, value, checked, onChange,
}: RadioButtonProps) {
  const radioId = useRef(`radio-${id}`);
  return (
    <div>
      <input id={radioId.current} type="radio" name={name} checked={checked} value={value} onChange={onChange} />
      <label htmlFor={radioId.current}>{value}</label>
    </div>
  );
}
