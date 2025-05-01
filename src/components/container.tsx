import { ReactNode } from "react";

export default function Container(props: {
  background: string;
  onClick?: () => void;
  children?: ReactNode;
}) {
  const { background, onClick, children } = props;

  return (
    <div
      className="w-full h-full p-2 flex align-center justify-center"
      onClick={() => onClick && onClick()}
    >
      <div className="border-2 border-black w-full h-full relative">
        <img
          src={background}
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        ></img>
        {!!children && children}
      </div>
    </div>
  );
}
