import Menu from './types/Menu';

export default interface Restaurant{
    id: number,
    category: string,
    name: string,
    menu: Menu[]
};
