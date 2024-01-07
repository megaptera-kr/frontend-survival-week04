import { Restaurant } from '../types/Restaurant';

type CategoryExtractionProps = {
  restaurants: Restaurant[];
};

const categoryExtraction = ({ restaurants }: CategoryExtractionProps) => restaurants.reduce(
  (acc: string[], restaurant) => (acc.includes(restaurant.category)
    ? acc : [...acc, restaurant.category]),
  [],
);

export default categoryExtraction;
