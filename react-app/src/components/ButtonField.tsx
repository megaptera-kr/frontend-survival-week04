type ButtonFieldProps = {
  categories: string[];
  setFilterButton: (value:string) => void;
}

export default function ButtonField({
  categories,
  setFilterButton,
}: ButtonFieldProps) {
  const handleClick = (category: string) => {
    setFilterButton(category);
  };

  return (
    <div>
      <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
        {['전체', ...categories].map((category) => (
          <li style={{ marginRight: '1rem' }} key={category}>
            <button
              type="button"
              onClick={() => handleClick(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
