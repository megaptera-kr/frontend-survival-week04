import Menu from './Menu';

export default interface Receipt{
    id: number;
    menu: Menu[];
    totalPrice: number;
};
