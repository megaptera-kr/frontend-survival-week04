type InputBarProps = {
    label: string;
    placeholder: string;
    filterText: string;
    setFilterText: (value: string) => void;
}

export default function InputBar({
  label,
  placeholder,
  filterText,
  setFilterText,
}: InputBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <div className="input-bar">
      <label htmlFor="input-name">{label}</label>
      <input placeholder={placeholder} id="input-name" value={filterText} onChange={handleChange} />
    </div>
  );
}
