type MenuAddButtonProps = {
  name: string
  title: string
  onClick: () => void
}

export default function MenuActionButton({ name, title, onClick }: MenuAddButtonProps) {
  return (
    <button
      name={name}
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
