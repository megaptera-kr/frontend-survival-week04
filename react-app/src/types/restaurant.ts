export type Menu = {
  id: string,
  name: string,
  price: number
}

export type Category = '전체' |'중식' | '한식'| '일식';

export type Restaurant = {
  id: string
  category: Category
  name: string
  menu: Menu[]
}

export type Restaurants = {
  restaurants: Restaurant[]
}

export type CartItem = {
  menu: Menu[],
  totalPrice: number
}

export type Receipt = {
  id: string,
  menu: Menu[],
  totalPrice: number
}
