type CategoryProps = {
  categories: string[];
  handleClickCategory: (category: string) => () => void;
};

export default function Category({
  categories,
  handleClickCategory,
}: CategoryProps) {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={handleClickCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
