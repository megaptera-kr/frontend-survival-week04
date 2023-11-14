import { Menu } from '../../../common';

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
			{`${menuItem.name}(${menuItem.price.toLocaleString()}원)`}
			{onClick && <button onClick={handleClick}>{btnLabel}</button>}
		</>
	);
}

export default MenuItem;
