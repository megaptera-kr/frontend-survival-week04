type TextFieldProps = {
  labelText: string
  placeholder: string
  filterText: string
  setFilterText: (value: string) => void
}

export default function TextField({
  labelText,
  placeholder,
  filterText,
  setFilterText,
}: TextFieldProps) {
  const id = `input-${labelText}`;

  const handleChangeFilterText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFilterText(value);
  };

  return (
    <div>
      <label
        style={{ marginRight: '1rem' }}
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChangeFilterText}
      />
    </div>
  );
}
