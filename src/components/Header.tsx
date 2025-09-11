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
  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-primary dark:text-white text-center">
        Fruits
      </h1>

      <ul className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2 mt-2">
        <li>
          <Button
            size="sm"
            variant={activeLetter === "" ? "default" : "secondary"}
            onClick={() => onLetterClick("")}
            className="w-full"
          >
            All
          </Button>
        </li>

        {firstLetters.map((letter) => (
          <li key={letter}>
            <Button
              size="sm"
              variant={letter === activeLetter ? "default" : "secondary"}
              onClick={() => onLetterClick(letter)}
              className="w-full"
            >
              {letter}
            </Button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
