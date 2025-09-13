import { useEffect, useMemo } from "react";

import useArrowNavigation from "../hooks/useArrowNavigation";

import { Button } from "./ui/button";

interface IHeaderProps {
  firstLetters: string[];
  activeLetter: string;

  onLetterClick: (letter: string) => void;
}

const Header = ({
  firstLetters,
  activeLetter,
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
              className="w-full"
            >
              {letter || "All"}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
