export interface Menu {
    id: string;
    name: string;
    price: number;
}

export type Restaurant = {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
};

export default Restaurant;
