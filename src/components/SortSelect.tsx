import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  RotateCcw,
} from "lucide-react";

import type { ISortedBy, NutritionKey } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NUTRITION_KEYS: NutritionKey[] = [
  "carbohydrates",
  "protein",
  "fat",
  "calories",
  "sugar",
];

interface SortSelectProps {
  sortedBy: ISortedBy | null;
  fruitsAmount: number;

  onSortClick: (sortedBy: ISortedBy | null) => void;
}

const SortSelect = ({
  sortedBy,
  fruitsAmount,
  onSortClick,
}: SortSelectProps) => {
  return (
    <Select
      value={sortedBy ? `${sortedBy.key}-${sortedBy.order}` : "reset"}
      onValueChange={(v) => {
        if (v === "reset") {
          onSortClick(null);
        } else {
          const [key, order] = v.split("-");
          onSortClick({
            key: key as ISortedBy["key"],
            order: order as ISortedBy["order"],
          });
        }
      }}
      disabled={fruitsAmount <= 1}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="reset">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-muted-foreground" />
            <span>Default</span>
          </div>
        </SelectItem>

        <div className="h-px bg-muted my-1" />

        {NUTRITION_KEYS.map((key) => (
          <div key={key} className="border-b last:border-none">
            <SelectItem value={`${key}-asc`}>
              <div className="flex items-center gap-2">
                <ArrowUpWideNarrow className="w-4 h-4 text-green-500" />
                <span className="capitalize">{key} (Low → High)</span>
              </div>
            </SelectItem>

            <SelectItem value={`${key}-desc`}>
              <div className="flex items-center gap-2">
                <ArrowDownWideNarrow className="w-4 h-4 text-red-500" />
                <span className="capitalize">{key} (High → Low)</span>
              </div>
            </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
