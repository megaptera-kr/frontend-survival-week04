import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

const useGetStore = () => {
  const { data } = useFetch<Record<string, Restaurant[]>>('http://localhost:3000/restaurants');
  if (!data) {
    return [];
  }
  return data?.restaurants;
};

export default useGetStore;
