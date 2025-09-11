import useProcessFruits from "@/hooks/useProcessFruits";
import type { IFruit } from "@/types";

interface IMainProps {
  fruits: IFruit[];
}

const Main = ({ fruits }: IMainProps) => {
  const { header, processedFruits } = useProcessFruits(fruits);

  console.log("processedFruits", processedFruits);

  return <div>{header}</div>;
};

export default Main;
