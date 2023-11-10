type ButtonType = {
  title: string;
  onClick: (category: string) => void;
}

export default function Button({ title, onClick }: ButtonType) {
  return (
    <button type="button" onClick={() => onClick(title)}>{title}</button>
  );
}
