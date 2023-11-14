import { useCallback, useMemo, useState } from "react";
import filterData from "../utils/filterData";
import Input from "../components/Input";
import Select from "../components/Select";
import RestaurantTable from "../components/RestaurantTable";
import { useFetchRestaurants } from "../hooks/useCustomFetch";
import CustomSuspense from "../components/CustomSuspense";

function Restaurants() {
	const [keyword, setKeyword] = useState("");
	const [category, setCategory] = useState("");

	const { data, error } = useFetchRestaurants();

	const handleKeywordChange = useCallback((keyword: string) => {
		setKeyword(keyword);
	}, []);

	const handleCategoryClick = useCallback((category: string) => {
		setCategory(category);
	}, []);

	const filteredData = useMemo(() => {
		if (!data) return [];

		if (!keyword && !category) return data;

		return filterData(data, { keyword, category });
	}, [data, keyword, category]);

	return (
		<div>
			<section>
				<Input
					label="검색"
					value={keyword}
					placeholder="식당 이름"
					onChange={handleKeywordChange}
				/>
				<Select
					options={[
						{ label: "전체", value: "" },
						{ label: "중식", value: "중식" },
						{ label: "한식", value: "한식" },
						{ label: "일식", value: "일식" },
					]}
					onClick={handleCategoryClick}
				/>
			</section>
			<section>
				<CustomSuspense isLoading={!data} error={error}>
					<RestaurantTable data={filteredData} />
				</CustomSuspense>
			</section>
		</div>
	);
}

export default Restaurants;
