type TextFieldInputProps = {
  label: string;
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
};

function TextFieldInput({
  label,
  placeholder,
  filterText,
  setFilterText,
}: TextFieldInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  const id = `input-${label}`;
  return (
    <div>
      <label htmlFor={id} style={{ marginRight: '10px' }}>
        {label}
      </label>
      <input
        type="text"
        value={filterText}
        onChange={handleChange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

export default TextFieldInput;
