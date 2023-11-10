import Button from './Button';

type CategoriesType = {
  categoryList: string[];
  onClick: (category:string) => void
}

export default function Categories({ categoryList, onClick }:CategoriesType) {
  return (
    <ul className="Categories">
      {categoryList.map((el) => (
        <li key={el}>
          <Button title={el} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
