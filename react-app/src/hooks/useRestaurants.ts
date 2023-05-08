import fetchUtils from '../utils/fetchUtils';
import useFetch from './useFetch';

export default function useRestaurants() {
  const url = `${fetchUtils().authority}/restaurants`;
  const [data]:any = useFetch(url);
  const restaurants = data?.restaurants ?? [];
  return restaurants;
}
