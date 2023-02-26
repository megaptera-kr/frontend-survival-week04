type TextFieldProps = {
    labelText: string;
    placeholder: string;
    text: string;
    setText: (value: string) => void;
}

export default function TextFiled({
  labelText, placeholder, text, setText,
}:TextFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div>
      <label
        htmlFor={`input-${labelText}`}
        style={{ paddingRight: '1rem' }}
      >
        {labelText}
      </label>
      <input
        type="text"
        id={`input-${labelText}`}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
