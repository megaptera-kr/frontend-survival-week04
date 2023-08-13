type ButtonFiledProps = {
    categories: string[];
    setFilterButton: (value:string) => void;
}

export default function ButtonFiled({
  categories,
  setFilterButton,
}:ButtonFiledProps) {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.target as HTMLButtonElement;
    setFilterButton(value);
  };
  return (
    <div>
      {categories.map((category:string) => (
        <button
          key={category}
          type="button"
          value={category}
          onClick={handleButtonClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
