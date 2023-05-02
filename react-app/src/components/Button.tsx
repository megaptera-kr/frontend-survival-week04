type Props = {
  title: string;
  setSelectCategory: (value:string) => void;
}
export default function Button({ title, setSelectCategory }:Props) {
  return (
    <button
      className="bg-purple-400 p-2 rounded-md
      text-sm text-gray-100 hover:bg-purple-500 w-12"
      type="button"
      onClick={() => setSelectCategory(title)}
    >
      {title}
    </button>
  );
}
