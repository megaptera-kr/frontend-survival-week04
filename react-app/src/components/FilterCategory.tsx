type FilterCategoryTypes = {
  filterList: string[];
  onFilterClick: (val: string) => void;
};

export default function FilterCategory({
  filterList,
  onFilterClick,
}: FilterCategoryTypes) {
  return (
    <div className="filter">
      <button onClick={() => onFilterClick('all')} type="button">
        전체
      </button>
      {filterList.map((filter) => (
        <button
          type="button"
          key={filter}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
