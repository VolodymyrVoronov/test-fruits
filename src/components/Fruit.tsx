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

import type { IFruit } from "@/types";

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
  index: number;
}

const Fruit = ({ fruit, index }: IFruitProps) => {
  const {
    name,
    family,
    genus,
    order,
    wikiLink,
    nutritions: { carbohydrates, protein, fat, calories, sugar },
  } = fruit;

  return (
    <Card className="rounded-2xl shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center justify-between">
          <span>{name}</span>
          <span className=" text-sm font-semibold size-6 flex items-center justify-center bg-primary rounded-full text-white">
            {index + 1}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 text-gray-700">
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

        <div className="flex items-center gap-2">
          <Wheat className="w-5 h-5 text-yellow-600" />
          <span>
            Carbohydrates: <span className="font-bold">{carbohydrates}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Drumstick className="w-5 h-5 text-rose-600" />
          <span>
            Protein: <span className="font-bold">{protein}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Droplet className="w-5 h-5 text-blue-400" />
          <span>
            Fat: <span className="font-bold">{fat}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span>
            Calories: <span className="font-bold">{calories}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Candy className="w-5 h-5 text-pink-500" />
          <span>
            Sugar: <span className="font-bold">{sugar}</span>
          </span>
        </div>
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
