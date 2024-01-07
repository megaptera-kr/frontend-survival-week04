type CategoriesBtnProps = {
  setCategory: (cartegory: string) => void;
  categories: string[];
};

function CategoriesBtn({ setCategory, categories }: CategoriesBtnProps) {
  const handleChangeCategory = (cartegory: string) => {
    setCategory(cartegory);
  };

  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {['전체', ...categories]?.map((cartegory) => (
        <li key={cartegory} style={{ marginRight: '1rem' }}>
          <button type="button" onClick={() => handleChangeCategory(cartegory)}>
            {cartegory}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategoriesBtn;
