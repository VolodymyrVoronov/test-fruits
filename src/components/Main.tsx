import useProcessFruits from "@/hooks/useProcessFruits";
import type { IFruit } from "@/types";

import Fruit from "./Fruit";
import Fruits from "./Fruits";

interface IMainProps {
  fruits: IFruit[];
}

const Main = ({ fruits }: IMainProps) => {
  const { header, processedFruits } = useProcessFruits(fruits);

  return (
    <div className=" flex flex-col gap-4">
      {header}

      <Fruits>
        {processedFruits.map((processedFruit) => (
          <Fruit key={processedFruit.id} fruit={processedFruit} />
        ))}
      </Fruits>
    </div>
  );
};

export default Main;
