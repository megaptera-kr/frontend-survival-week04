import useHandleClickSelect from '../hooks/useHandleClickSelect';

import Menu from '../types/Menu';

type MenuSelectButtonProps = {
    data: Menu;
}

export default function MenuSelectButton({ data }: MenuSelectButtonProps) {
  const { handleClickSelect } = useHandleClickSelect();

  return (
    <button
      style={{ marginLeft: '.5rem' }}
      name={`#${data.name}`}
      type="button"
      onClick={() => handleClickSelect(data)}
    >
      선택
    </button>
  );
}
