type CategoryButtonProps ={
  category: string;
}

export default function CategoryButton({
  category,
} : CategoryButtonProps) {
  return (
    <button type="button">{category}</button>
  );
}
