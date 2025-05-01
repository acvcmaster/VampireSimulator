import { ReactNode } from "react";

export default function Centered(props: { children?: ReactNode }) {
  const { children } = props;

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!!children && children}
    </div>
  );
}
