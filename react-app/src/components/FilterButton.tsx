type FilterButtonProps = {
    category: string;
    setFilterCategory: (category: string) => void
}

export default function FilterButton({
  category, setFilterCategory,
}: FilterButtonProps) {
  const handleClick = (text: string) => {
    setFilterCategory(text);
  };

  return (
    <button type="button" onClick={() => handleClick(category)}>{category}</button>
  );
}
