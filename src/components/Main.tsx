import { AnimatePresence, motion } from "framer-motion";

import useProcessFruits from "@/hooks/useProcessFruits";
import type { IFruit } from "@/types";

import Fruit from "./Fruit";
import Fruits from "./Fruits";

interface IMainProps {
  fruits: IFruit[];
}

const Main = ({ fruits }: IMainProps) => {
  const { header, processedFruits, selectedSortedBy } =
    useProcessFruits(fruits);

  return (
    <div className=" flex flex-col gap-4">
      <div className="sticky top-1">
        <div className="relative z-10">{header}</div>
        <div className="absolute inset-0 -left-[0.5rem] -top-1 h-[calc(100%+1rem)] w-[calc(100%+1rem)] bg-[#f8f2fa]  origin-left z-0" />
      </div>

      <Fruits>
        <AnimatePresence initial={false} mode="popLayout">
          {processedFruits.map((processedFruit, index) => (
            <motion.li
              key={processedFruit.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Fruit
                fruit={processedFruit}
                selectedSortedBy={selectedSortedBy}
                index={index}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </Fruits>
    </div>
  );
};

export default Main;
