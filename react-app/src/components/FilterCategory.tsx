import CategoryButton from './CategoryButton';

export default function FilterCategory() {
  return (
    <div>
      <CategoryButton category="전체" />
      <CategoryButton category="중식" />
      <CategoryButton category="한식" />
      <CategoryButton category="일식" />
    </div>
  );
}
