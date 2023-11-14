import { RestaurantsType, Restaurants, Menu, Orders } from '../../../common';
import { useCartStorage } from '../hooks/useStorage';
import MenuItem from './MenuItem';

interface Props {
	data: RestaurantsType;
}

function RestaurantRow({ restaurant }: { restaurant: Restaurants }) {
	const { id, name, category, menu } = restaurant;

	const { setCart } = useCartStorage();

	const handleCartInBtn = ({ menuItem }: { menuItem: Menu }) => {
		setCart((prev) => [...prev, menuItem]);
	};

	return (
		<tr key={`${id}`}>
			<td>{name}</td>
			<td>{category}</td>
			<td>
				<ul>
					{menu.map((menuItem, index) => (
						<li key={menuItem.id}>
							<MenuItem
								menuItem={menuItem}
								index={index}
								onClick={handleCartInBtn}
							/>
						</li>
					))}
				</ul>
			</td>
		</tr>
	);
}

function RestaurantTable({ data }: Props) {
	return (
		<table>
			<thead>
				<tr>
					<th>식당 이름</th>
					<th>종류</th>
					<th>메뉴</th>
				</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<RestaurantRow key={`${row.id}_${row.name}`} restaurant={row} />
				))}
			</tbody>
		</table>
	);
}

export default RestaurantTable;
