import MenuType from './MenuType';

interface ReceiptType{
    id: string,
    menu: MenuType[],
    totalPrice: number;
}

export default ReceiptType;
