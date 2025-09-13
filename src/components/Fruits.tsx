import { type ReactNode } from "react";

interface IFruitsProps {
  children: ReactNode;
}

const Fruits = ({ children }: IFruitsProps) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4">
      {children}
    </ul>
  );
};

export default Fruits;
