import CategoryButton from './CategoryButton';

type FilterCategoryProps = {
  // category: string;
  setCategory: (value : string)=> void;
}

export default function FilterCategory({
  // category,
  setCategory,
}: FilterCategoryProps) {
  const categories = ['전체', '중식', '한식', '일식'];

  return (
    <div>
      {
        categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            setCategory={setCategory}
          />
        ))
      }
    </div>
  );
}
