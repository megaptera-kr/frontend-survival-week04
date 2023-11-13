import { useCallback, useMemo, useState } from "react";
import { useFetch } from "usehooks-ts";
import { RestaurantsType, ResponseType, PATH } from "../../../common";
import filterData from "../utils/filterData";
import Input from "../components/Input";
import Select from "../components/Select";
import RestaurantTable from "../components/RestaurantTable";

const Restaurants = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const { data: response, error } = useFetch<ResponseType<RestaurantsType>>(
    `http://localhost:3001/${PATH.restaurants}`
  );

  const handleKeywordChange = useCallback((keyword: string) => {
    setKeyword(keyword);
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setCategory(category);
  }, []);

  const filteredData = useMemo(() => {
    if (!response) return [];
    const { data } = response;

    if (!keyword && !category) return data;

    return filterData(data, { keyword, category });
  }, [response, keyword, category]);

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
        <RestaurantTable data={filteredData} />
      </section>
    </div>
  );
};

export default Restaurants;
