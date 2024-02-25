export type RestaurantCategory = '한식' | '중식' | '일식'

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
