type MenuAddButtonProps = {
  title: string
  onClick: () => void
}

export default function MenuActionButton({ title, onClick }: MenuAddButtonProps) {
  return (
    <button
      type="button"
      style={{
        marginLeft: '0.5rem',
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
