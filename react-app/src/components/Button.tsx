type ButtonType = {
  title: string;
  name: string;
  onClick: (category: string) => void;
}

export default function Button({ title, onClick, name = '' }: ButtonType) {
  return (
    <button type="button" onClick={() => onClick(title)} name={name}>{title}</button>
  );
}
