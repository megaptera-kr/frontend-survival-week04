import { RestaurantsType } from '../../../common';

export type Condition = {
  keyword?: string;
  category?: string;
};

const filterData = (
	data: RestaurantsType,
	condition: Condition = { category: '', keyword: '' },
) => {
	const { keyword, category } = condition;

	if (!keyword && !category) return data;

	let filtered: RestaurantsType = data;

	if (keyword) {
		filtered = filtered.filter((row) => row.name.includes(keyword.trim()));
	}

	if (category) {
		filtered = filtered.filter((row) => row.category === category);
	}

	return filtered;
};

export default filterData;
