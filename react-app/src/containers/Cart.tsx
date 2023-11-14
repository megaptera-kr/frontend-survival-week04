import { useFetchOrders } from '../hooks/useCustomFetch';
import createReceiptData from '../utils/createReceiptData';
import { useCartStorage, useReceiptStorage } from '../hooks/useStorage';
import MenuItem from '../components/MenuItem';

function Cart() {
	const { cart, setCart } = useCartStorage();
	const { setReceipt } = useReceiptStorage();

	const fetchOrders = useFetchOrders();

	const receiptData = createReceiptData(cart);

	const handlePayment = async () => {
		try {
			const { data } = await fetchOrders(receiptData);
			setCart([]);
			setReceipt(data);
		} catch (error) {}
	};

	const handleCartOutBtn = ({ menuIndex }: { menuIndex: number }) => {
		setCart((prev) => prev.filter((row, index) => index !== menuIndex));
	};

	return (
		<article>
			<h2>점심 바구니</h2>
			<ul>
				{cart.map((menu, index) => (
					<li key={`${menu.id}_${index}`}>
						<MenuItem
							menuItem={menu}
							index={index}
							btnLabel="취소"
							onClick={handleCartOutBtn}
						/>
					</li>
				))}
			</ul>
			<button type="button" onClick={handlePayment} disabled={!cart.length}>
				{`합계 ${receiptData.totalPrice.toLocaleString()}원 주문`}
			</button>
		</article>
	);
}

export default Cart;
