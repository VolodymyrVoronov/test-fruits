import { useState } from "react";

import extractFirstLatterFromNameIntoSortedArr from "@/helpers/extractFirstLatterFromNameIntoSortedArr";
import type { IFruit } from "@/types";

import Header from "@/components/Header";

const useProcessFruits = (fruits: IFruit[]) => {
  const [letter, setLetter] = useState("");

  const firstLetters = extractFirstLatterFromNameIntoSortedArr(fruits);

  const onLetterClick = (letter: string) => setLetter(letter);

  const filteredFruits = fruits.filter((fruit) => {
    if (letter === "") return true;

    return fruit.name.at(0)?.toLowerCase() === letter.toLowerCase();
  });

  const header = (
    <Header
      firstLetters={firstLetters}
      activeLetter={letter}
      fruitsAmount={filteredFruits.length}
      onLetterClick={onLetterClick}
    />
  );

  return { header, processedFruits: filteredFruits };
};

export default useProcessFruits;
