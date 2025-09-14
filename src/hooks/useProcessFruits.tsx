import { useMemo, useState } from "react";

import extractFirstLatterFromNameIntoSortedArr from "@/helpers/extractFirstLatterFromNameIntoSortedArr";
import type { IFruit, ISortedBy } from "@/types";

import Header from "@/components/Header";

const useProcessFruits = (fruits: IFruit[]) => {
  const [letter, setLetter] = useState("");
  const [sortedBy, setSortedBy] = useState<ISortedBy | null>(null);

  const firstLetters = extractFirstLatterFromNameIntoSortedArr(fruits);

  const onLetterClick = (letter: string) => setLetter(letter);

  const onSortClick = (sortedBy: ISortedBy | null) => setSortedBy(sortedBy);

  const filteredFruits = useMemo(() => {
    let result = fruits.filter((fruit) => {
      if (letter === "") return true;
      return fruit.name.at(0)?.toLowerCase() === letter.toLowerCase();
    });

    result = result.sort((a, b) => {
      if (sortedBy) {
        const aValue = a.nutritions[sortedBy.key];
        const bValue = b.nutritions[sortedBy.key];

        return sortedBy.order === "desc"
          ? bValue - aValue // High → Low
          : aValue - bValue; // Low → High
      }

      // Default alphabetical sort
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [fruits, letter, sortedBy]);

  const fruitsAmount = filteredFruits.length;

  const header = (
    <Header
      firstLetters={firstLetters}
      activeLetter={letter}
      fruitsAmount={fruitsAmount}
      sortedBy={sortedBy}
      onLetterClick={onLetterClick}
      onSortClick={onSortClick}
    />
  );

  return {
    header,
    processedFruits: filteredFruits,
    selectedSortedBy: sortedBy,
  };
};

export default useProcessFruits;
