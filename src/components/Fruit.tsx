import {
  Candy,
  Droplet,
  Drumstick,
  Flame,
  Layers,
  Leaf,
  Users,
  Wheat,
} from "lucide-react";

import type { IFruit, ISortedBy } from "@/types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardWikiLink from "./CardWikiLink";

interface IFruitProps {
  fruit: IFruit;
  selectedSortedBy: ISortedBy | null;
  index: number;
}

const nutrientConfig = [
  {
    key: "carbohydrates",
    label: "Carbohydrates",
    icon: Wheat,
    color: "text-yellow-600",
  },
  { key: "protein", label: "Protein", icon: Drumstick, color: "text-rose-600" },
  { key: "fat", label: "Fat", icon: Droplet, color: "text-blue-400" },
  { key: "calories", label: "Calories", icon: Flame, color: "text-orange-500" },
  { key: "sugar", label: "Sugar", icon: Candy, color: "text-pink-500" },
];

const Fruit = ({ fruit, selectedSortedBy, index }: IFruitProps) => {
  const { name, family, genus, order, wikiLink, nutritions } = fruit;

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center justify-between gap-1">
          <span>{name}</span>
          <span className=" text-sm font-medium size-6 flex items-center justify-center bg-primary rounded-full text-white">
            {index + 1}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-gray-700">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" />
          <span>
            Family: <span className="font-bold">{family}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-green-600" />
          <span>
            Genus: <span className="font-bold">{genus}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-500" />
          <span>
            Order: <span className="font-bold">{order}</span>
          </span>
        </div>

        {nutrientConfig.map(({ key, label, icon: Icon, color }) => {
          const value = nutritions[key as keyof typeof nutritions];
          const isSelected = selectedSortedBy?.key === key;

          return (
            <div
              key={key}
              className={`flex items-center gap-2 transition-colors ${
                isSelected ? "bg-primary/20 dark:bg-primary rounded-lg" : ""
              }`}
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <span>
                {label}: <span className="font-bold">{value}</span>
              </span>
            </div>
          );
        })}
      </CardContent>

      {wikiLink && (
        <CardFooter>
          <CardWikiLink name={name} wikiLink={wikiLink} />
        </CardFooter>
      )}
    </Card>
  );
};

export default Fruit;
