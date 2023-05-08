import useFetch from './useFetch';

export default function useRestaurants() {
  const url = 'http://localhost:3000/restaurants';
  const [data]:any = useFetch(url);
  const restaurants = data?.restaurants ?? [];
  return restaurants;
}
