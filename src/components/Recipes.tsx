import { useState, useCallback, useMemo } from "react";
import { useStore } from "@nanostores/react";
import { ingredientsInventory } from "../inventoryStore";
import { cocktails } from "../const/cocktails";
import type { Taste } from "type";
import { tasteColorMapping } from "../const";
import Clear from "@icon/clear.svg";

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTastes, setSelectedTastes] = useState<Taste[]>([]);
  const $ingredientsInventory = useStore(ingredientsInventory);

  const countMatches = useCallback((arr1: string[], arr2: string[]): number => {
    const arr1LowerCase = arr1.map((i) => i.toLocaleLowerCase());
    const arr2LowerCase = arr2.map((i) => i.toLocaleLowerCase());
    let count = 0;

    for (const element of arr1LowerCase) {
      if (arr2LowerCase.includes(element)) {
        count++;
      }
    }

    return count;
  }, []);

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

  const sortedResult = useMemo(() => {
    return matchedResult.sort((a, b) => {
      return b.score - a.score;
    });
  }, [matchedResult]);

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
    <div className="container mx-auto p-4 mb-16">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <input
            type="text"
            className="p-2 flex-grow border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
            placeholder="Search cocktails..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="p-2 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
            disabled={!searchQuery.length}
            onClick={() => {
              setSearchQuery("");
              setSelectedTastes([]);
            }}
          >
            <img className="w-6" src={Clear.src} alt="" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(tasteColorMapping).map((taste) => {
            const isChecked = !selectedTastes.includes(taste as Taste);
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
                  className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center cursor-pointer ${
                    isChecked ? tasteColorMapping[taste as Taste] : `bg-white`
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
          {filteredResult.map(({ name, tastes, ingredients, score }, index) => {
            return (
              <a
                key={`${name}-${index}`}
                href={`/mixologist/cocktails/${name
                  .toLocaleLowerCase()
                  .replace(/ /g, "-")}`}
              >
                <div
                  className={`p-4 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm 
                            ${
                              tasteColorMapping[
                                tastes.length && (tastes[0] as Taste)
                              ]
                            } ${score < 1 ? `opacity-60` : ``}`}
                >
                  <div className="flex justify-between">
                    <span className="font-bold">{name}</span>
                    <span className="">{tastes.join(", ")}</span>
                  </div>
                  <ul>
                    {ingredients.map(({ name, amount, unit }, index) => {
                      return (
                        <li key={`${name}-${index}`}>
                          {$ingredientsInventory.includes(
                            name.toLocaleLowerCase(),
                          ) ? (
                            <>
                              {name} - {amount} {unit}
                            </>
                          ) : (
                            <s>
                              {name} - {amount} {unit}
                            </s>
                          )}
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
    </div>
  );
}
