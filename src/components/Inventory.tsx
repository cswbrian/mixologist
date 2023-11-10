import { useState } from "react";
import IngredientSelector from "@components/IngredientSelector";
import SearchBox from "@components/SearchBox";
import type { Ingredient } from "type";

interface GroupedIngredientProps {
  name: string;
  ingredients: Ingredient[];
}

interface InventoryProps {
  groupedIngredients: GroupedIngredientProps[];
}

export default function Inventory({ groupedIngredients }: InventoryProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIngredients = groupedIngredients
    .map((groupedIngredient) => {
      const ingredients = groupedIngredient.ingredients
        .map((ingredient) => ingredient.name)
        .filter((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return {
        ...groupedIngredient,
        ingredients,
      };
    })
    .filter((groupedIngredient) => groupedIngredient.ingredients.length > 0);

  return (
    <div className="flex flex-col gap-6">
      <SearchBox
        placeholder="Search ingredients..."
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />
      {filteredIngredients.map((groupedIngredient) => (
        <div key={groupedIngredient.name}>
          <h2 className="font-bold mb-2">{groupedIngredient.name}</h2>
          <IngredientSelector ingredients={groupedIngredient.ingredients} />
        </div>
      ))}
    </div>
  );
}
