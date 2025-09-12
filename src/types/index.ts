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
