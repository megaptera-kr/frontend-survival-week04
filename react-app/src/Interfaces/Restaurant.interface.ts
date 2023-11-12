export interface MenuInterface {
	id: string
	name: string
	price: number
	handleSetCart: () => void
}

export interface RestaurantsInterface {
	id: string
	category: string
	name: string
	menu: MenuInterface[]
	handleSetCart?: () => void
}

export interface ReceiptInterface {
	id: string
	menu: MenuInterface[]
	totalPrice: number
}