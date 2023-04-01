import { useQuery } from '@tanstack/react-query';

export function useRestaurants() {
  const { data, ...rest } = useQuery({
    queryKey: ['restaurants'],
    queryFn: () => fetch('http://localhost:3000/restaurants').then((res) => res.json()),
  });

  return {
    restaurants: data.restaurants,
    ...rest,
  };
}

export function dummy() {
  return null;
}
