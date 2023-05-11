import categories from '../utils/categories';
import Button from './Button';

type Props= {
  setSelectCategory: (value:string) => void;
}

export default function CategoryButtons({ setSelectCategory }:Props) {
  const restaurantsCategories = categories();
  return (
    <div className="flex justify-between w-full">
      {restaurantsCategories.map((category) => (
        <Button
          key={category}
          title={category}
          setSelectCategory={setSelectCategory}
        />
      ))}
    </div>
  );
}
