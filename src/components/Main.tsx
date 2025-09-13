import { motion, useScroll, useSpring } from "framer-motion";

import useProcessFruits from "@/hooks/useProcessFruits";
import type { IFruit } from "@/types";

import Fruit from "./Fruit";
import Fruits from "./Fruits";

interface IMainProps {
  fruits: IFruit[];
}

const Main = ({ fruits }: IMainProps) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 1,
  });

  const { header, processedFruits } = useProcessFruits(fruits);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className=" flex flex-col gap-4">
        <div className="sticky top-0">
          <div className="relative z-10">{header}</div>
          <div className="absolute inset-0 -left-[0.5rem] h-[calc(100%+1rem)] w-[calc(100%+1rem)] bg-[#f8f2fa]  origin-left z-0" />
        </div>

        <Fruits>
          {processedFruits.map((processedFruit, index) => (
            <Fruit
              key={processedFruit.id}
              fruit={processedFruit}
              index={index}
            />
          ))}
        </Fruits>
      </div>
    </>
  );
};

export default Main;
