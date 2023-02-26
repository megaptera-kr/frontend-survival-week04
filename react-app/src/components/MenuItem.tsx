import MenuSelectButton from './MenuSelectButton';
import MenuCancelButton from './MenuCancelButton';

import Menu from '../types/Menu';

type MenuItemProps = {
    data: Menu;
    showSelectBtn?: boolean;
    cancelIndex?: number;
}

export default function MenuItem({
  data, showSelectBtn = false, cancelIndex,
}:MenuItemProps) {
  return (
    <li style={{
      display: 'flex',
      paddingBlock: '.5rem',
    }}
    >
      <span style={{ margin: '0 auto' }}>{`${data.name}(${data.price.toLocaleString('ko-KR')}원)`}</span>
      {showSelectBtn && <MenuSelectButton data={data} />}
      {cancelIndex && <MenuCancelButton cancelIndex={cancelIndex} />}
    </li>
  );
}
