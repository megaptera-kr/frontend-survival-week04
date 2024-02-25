export const RESTAURANTS_CATEGORY = ['한식', '중식', '일식'] as const;

export type RestaurantCategory = typeof RESTAURANTS_CATEGORY[number]
export type RestaurantCategoryWithAll = RestaurantCategory | '전체'

export type RestaurantMenu = {
  id: string
  name: string
  price: number
}

export type Restaurant = {
  id: string
  category: RestaurantCategory
  name: string
  menu: RestaurantMenu[]
}
