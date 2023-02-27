import useHandleClickCancel from '../hooks/useHandleClickCancel';

type MenuCancelButtonProps = {
    cancelIndex: number
}

export default function MenuCancelButton({ cancelIndex }:MenuCancelButtonProps) {
  const { handleClickCancel } = useHandleClickCancel();

  return (
    <button
      style={{ marginLeft: '.5rem' }}
      type="button"
      onClick={() => handleClickCancel(cancelIndex)}
    >
      취소
    </button>
  );
}
