export default function Button(props: {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  const { text, disabled, onClick } = props;
  const className = disabled ? "bg-gray-400 border border-black text-gray-100 rounded w-fit h-fit p-3 pl-10 pr-10 text-center" :
    "bg-pink-300 hover:bg-pink-200 border border-black text-white rounded w-fit h-fit p-3 pl-10 pr-10 text-center cursor-pointer";

  return (
    <button
      className={className}
      onClick={() => !disabled && onClick()}
    >
      {text}
    </button>
  );
}
