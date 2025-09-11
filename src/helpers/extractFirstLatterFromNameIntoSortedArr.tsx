import type { IFruit } from "@/types";

const extractFirstLatterFromNameIntoSortedArr = (fruits: IFruit[]) => {
  const uniqueNames = new Set(fruits.map((fruit) => fruit.name[0]));
  const firstLetters = Array.from(uniqueNames);
  const sortedFirstLetters = firstLetters.sort((a, b) => a.localeCompare(b));

  return sortedFirstLetters;
};

export default extractFirstLatterFromNameIntoSortedArr;
