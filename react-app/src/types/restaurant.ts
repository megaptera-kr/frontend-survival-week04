export type TRestaurantMenu = {
  id: string
  name: string
  price: number
}

export type TRestaurantsResponse = {
  id: string
  category: string
  name: string
  menu: TRestaurantMenu[]
}
