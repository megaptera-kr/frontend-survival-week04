import { useFetch } from 'usehooks-ts';

export default function useFetchRestaurant() {
  const url = 'http://localhost:3000/restaurants';

  const { data } = useFetch<any>(url);

  if (!data) {
    return [];
  }
  return data.restaurants;
}
