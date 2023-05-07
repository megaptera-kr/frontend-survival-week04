type MenuItem = {
    id: string,
    name: string,
    price: number,
    }

type Menu = {
    id: string,
    category: string,
    name: string,
    menu: MenuItem[]
    }

export { MenuItem, Menu };
