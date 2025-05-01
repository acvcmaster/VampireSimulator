import { ReactNode } from "react";

export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const rowsClasses = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  7: "grid-rows-7",
  8: "grid-rows-8",
  9: "grid-rows-9",
  10: "grid-rows-10",
} as const;

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
} as const;

export default function Grid(props: {
  rows: GridSize;
  columns: GridSize;
  children?: ReactNode;
}) {
  const { rows, columns, children } = props;

  return (
    <div
      className={`h-full w-full grid ${rowsClasses[rows]} ${colsClasses[columns]}`}
    >
      {!!children && children}
    </div>
  );
}
