import { useState } from "react";
import IngredientSelector from "@components/IngredientSelector";

export default function Inventory({ groupedIngredients }) {
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
      <input
        type="text"
        className="p-2 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
        placeholder="Search ingredients..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredIngredients.map((groupedIngredient) => (
        <div key={groupedIngredient.name}>
          <h2 className="font-bold mb-2">{groupedIngredient.name}</h2>
          <IngredientSelector
            client:load
            ingredients={groupedIngredient.ingredients}
          />
        </div>
      ))}
    </div>
  );
}
