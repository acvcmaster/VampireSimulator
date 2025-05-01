export default function Title(props: { text: string }) {
  const { text } = props;

  return <h1 className="text-white text-6xl font-serif select-none">{text}</h1>;
}
