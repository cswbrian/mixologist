import { useState } from "react";
import { useStore } from "@nanostores/react";
import { ingredientsInventory } from "../inventoryStore";
import { cocktails } from "../cocktails";

const tasteColorMapping = {
  Fresh: "bg-green-400",
  Sour: "bg-yellow-400",
  Sweet: "bg-pink-300",
  "Bitter sweet": "bg-fuchsia-400",
  Salty: "bg-cyan-400",
  Boozy: "bg-orange-400",
  Spicy: "bg-red-500",
  Nutty: "bg-orange-300",
  Creamy: "bg-orange-200",
  Tart: "bg-fuchsia-400",
  Umami: "bg-teal-400",
  Herbal: "bg-lime-300",
  Floral: "bg-rose-400",
  Smoky: "bg-gray-300",
  Unknown: "bg-stone-300",
};

type TasteColorMapping = keyof typeof tasteColorMapping;

function countMatches(arr1: string[], arr2: string[]): number {
  const arr1LowerCase = arr1.map((i) => i.toLocaleLowerCase());
  const arr2LowerCase = arr2.map((i) => i.toLocaleLowerCase());
  let count = 0;

  for (const element of arr1LowerCase) {
    if (arr2LowerCase.includes(element)) {
      count++;
    }
  }

  return count;
}

// function getTasteCounts(cocktails) {
//     const count = {}
//     for (const cocktail of cocktails) {
//         const cocktailTaste = cocktail.taste || 'Unknown'
//         if (!count[cocktailTaste]) {
//             count[cocktailTaste] = 1
//         } else {
//             count[cocktailTaste] += 1
//         }
//     }
//     return count
// }

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTastes, setSelectedTastes] = useState<TasteColorMapping[]>([]);
  const $ingredientsInventory = useStore(ingredientsInventory);

  // const tasteCount = getTasteCounts(cocktails)
  const matchedResult = cocktails.map((cocktail) => {
    const cocktailIngredents = cocktail.ingredients.map(
      (ingredient) => ingredient.name,
    );
    const matchedCount = countMatches(
      $ingredientsInventory,
      cocktailIngredents,
    );
    return {
      ...cocktail,
      matchedCount,
      score: matchedCount / cocktail.ingredients.length,
    };
  });

  const sortedResult = matchedResult.sort((a, b) => {
    return b.score - a.score;
  });

  const filteredResult = sortedResult
    .filter((item) => {
      if (selectedTastes.length) {
        return item.tastes.some((taste) => selectedTastes.includes(taste));
      }
      return true;
    })
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="p-2 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
        placeholder="Search cocktails..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex flex-wrap gap-2">
        {Object.keys(tasteColorMapping).map((taste) => {
          const isChecked = selectedTastes.includes(taste);
          return (
            <label key={taste}>
              <input
                className="hidden"
                type="checkbox"
                value={taste}
                checked={isChecked}
                onChange={() => {
                  if (isChecked) {
                    setSelectedTastes(
                      selectedTastes.filter(
                        (selectedTaste) => selectedTaste !== taste,
                      ),
                    );
                  } else {
                    setSelectedTastes([...selectedTastes, taste]);
                  }
                }}
              />
              <span
                className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center ${
                  isChecked
                    ? tasteColorMapping[taste as TasteColorMapping]
                    : `bg-white`
                }`}
              >
                {taste}
                {/* ({tasteCount[taste] || 0}) */}
              </span>
            </label>
          );
        })}
      </div>

      <ul className="flex flex-col gap-6">
        {filteredResult.map(({ name, tastes, ingredients, score }) => {
          return (
            <a
              key={name}
              href={`/mixologist/cocktails/${name
                .toLocaleLowerCase()
                .replace(/ /g, "-")}`}
            >
              <div
                className={`p-4 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm 
                            ${
                              tasteColorMapping[
                                tastes.length &&
                                  (tastes[0] as TasteColorMapping)
                              ]
                            } ${score < 1 ? `opacity-60` : ``}`}
              >
                <div className="flex justify-between">
                  <span className="font-bold">{name}</span>
                  <span className="">{tastes.join(", ")}</span>
                </div>
                <ul>
                  {ingredients.map(({ name, amount, unit }) => {
                    if (
                      $ingredientsInventory.includes(name.toLocaleLowerCase())
                    ) {
                      return (
                        <li key={name}>
                          {name} - {amount} {unit}
                        </li>
                      );
                    }
                    return (
                      <li key={name}>
                        <s>
                          {name} - {amount} {unit}
                        </s>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
