import Restaurants from '../type/Restaurants';

export default function extractCategory(restaurants:Restaurants[]) {
  const categories = restaurants.reduce((acc:string[], cur:Restaurants):string[] => {
    const { category } = cur;
    return (acc.includes(category) ? acc : [...acc, category]);
  }, []);
  return categories;
}
