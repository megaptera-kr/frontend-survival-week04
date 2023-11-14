import { Menu } from '../../../common';
import toLocaleString from '../utils/toLocaleString';

type Props = {
	menuItem: Menu;
	index: number;
	btnLabel?: string;
	onClick?: (payload: { menuItem: Menu; menuIndex: number }) => void;
};

function MenuItem({ menuItem, index, btnLabel = '선택', onClick }: Props) {
	const handleClick = () => onClick && onClick({ menuItem, menuIndex: index });

	return (
		<>
			{`${menuItem.name}(${toLocaleString(menuItem.price)})`}
			{onClick && (
				<button name={`#${menuItem.name}`} onClick={handleClick}>
					{btnLabel}
				</button>
			)}
		</>
	);
}

export default MenuItem;
