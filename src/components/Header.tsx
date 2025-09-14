import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo } from "react";

import useArrowNavigation from "../hooks/useArrowNavigation";

import { Button } from "./ui/button";
import type { ISortedBy } from "@/types";
import SortSelect from "./SortSelect";

interface IHeaderProps {
  firstLetters: string[];
  activeLetter: string;
  fruitsAmount: number;
  sortedBy: ISortedBy | null;

  onLetterClick: (letter: string) => void;
  onSortClick: (sortedBy: ISortedBy | null) => void;
}

const Header = ({
  firstLetters,
  activeLetter,
  fruitsAmount,
  sortedBy,

  onLetterClick,
  onSortClick,
}: IHeaderProps) => {
  const allLetters = useMemo(() => ["", ...firstLetters], [firstLetters]);

  const { handleKeyDown, registerButton, setFocusIndex } = useArrowNavigation(
    allLetters,
    (item) => onLetterClick(item) // when selection changes, call parent handler
  );

  // Sync focus when activeLetter changes (e.g., user clicks a button)
  useEffect(() => {
    const index = allLetters.indexOf(activeLetter);

    if (index !== -1) {
      setFocusIndex(index);
    }
  }, [activeLetter, allLetters, setFocusIndex]);

  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-primary dark:text-white text-center">
        Fruits
      </h1>

      <div className="grid grid-cols-[1fr_auto] items-center gap-2">
        <ul
          onKeyDown={handleKeyDown}
          className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2"
        >
          {allLetters.map((letter, index) => {
            const isActive = letter === activeLetter;
            return (
              <li key={letter || "all"}>
                <Button
                  ref={registerButton(index)}
                  size="sm"
                  variant={isActive ? "default" : "secondary"}
                  onClick={() => onLetterClick(letter)}
                  className="w-full relative"
                  aria-selected={isActive}
                  aria-label={
                    isActive
                      ? (letter || "All") + ` ${fruitsAmount} found`
                      : letter
                  }
                  aria-current={isActive}
                >
                  {letter || "All"}
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: [0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5 shadow-2xl"
                      >
                        {fruitsAmount}
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </Button>
              </li>
            );
          })}
        </ul>

        <SortSelect
          sortedBy={sortedBy}
          fruitsAmount={fruitsAmount}
          onSortClick={onSortClick}
        />
      </div>
    </header>
  );
};

export default Header;
