export interface IFruit {
  name: string;
  id: number;
  family: string;
  genus: string;
  order: string;
  wikiLink?: string;
  nutritions: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
  };
}

export type NutritionKey = keyof IFruit["nutritions"];

export interface ISortedBy {
  key: keyof IFruit["nutritions"];
  order: "asc" | "desc";
}
