import { useEffect, useMemo } from "react";

import useArrowNavigation from "../hooks/useArrowNavigation";

import { Button } from "./ui/button";

interface IHeaderProps {
  firstLetters: string[];
  activeLetter: string;
  fruitsAmount: number;

  onLetterClick: (letter: string) => void;
}

const Header = ({
  firstLetters,
  activeLetter,
  fruitsAmount,

  onLetterClick,
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

      <ul
        onKeyDown={handleKeyDown}
        className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2 mt-2"
      >
        {allLetters.map((letter, index) => (
          <li key={letter || "all"}>
            <Button
              ref={registerButton(index)}
              size="sm"
              variant={letter === activeLetter ? "default" : "secondary"}
              onClick={() => onLetterClick(letter)}
              className="w-full relative"
              aria-selected={letter === activeLetter}
              aria-label={
                letter === activeLetter
                  ? (letter || "All") + ` ${fruitsAmount} found`
                  : letter
              }
              aria-current={letter === activeLetter}
            >
              {letter || "All"}

              {letter === activeLetter ? (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full px-1.5">
                  {fruitsAmount}
                </span>
              ) : (
                ""
              )}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
