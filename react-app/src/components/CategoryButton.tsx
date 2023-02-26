type CategoryButtonProps = {
    category: string;
    onClick: () => void;
}

export default function CategoryButton({ category, onClick }:CategoryButtonProps) {
  return (
    <li style={{ marginRight: '1rem' }}>
      <button type="button" onClick={onClick}>{category}</button>
    </li>
  );
}
