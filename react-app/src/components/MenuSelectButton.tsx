type Props = {
  name: string;
  title: string;
  setCart: () => void;
}

export default function MenuSelectButton({ name, title, setCart }:Props) {
  return (
    <button
      className="bg-purple-400 p-2 rounded-md text-sm
      text-gray-100 hover:bg-purple-500 w-12"
      name={name}
      type="button"
      onClick={setCart}
    >
      {title}
    </button>
  );
}
