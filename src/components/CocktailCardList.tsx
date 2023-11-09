import { useCallback, useMemo } from "react";
import type { Cocktail } from "type";
import CocktailCard from "@components/CocktailCard";
import { useIngredientsInventory } from "src/hooks/useIngredientsInventory";

interface Props {
  cocktails: Cocktail[];
}

export default function CocktailCardList({ cocktails }: Props): JSX.Element {
  const { ingredientsInventory } = useIngredientsInventory();

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

    const matchedCount = countMatches(ingredientsInventory, cocktailIngredents);

    return {
      ...cocktail,
      matchedCount,
      score: matchedCount / cocktailIngredents.length,
    };
  });

  const sortedResult = useMemo(() => {
    return matchedResult.sort((a, b) => {
      return b.score - a.score;
    });
  }, [matchedResult]);

  return (
    <ul className="flex flex-col gap-6">
      {sortedResult.map(({ name, tastes, ingredients, score }, index) => {
        return (
          <CocktailCard
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
            key={`${name}-${index}`}
            name={name}
            tastes={tastes}
            ingredients={ingredients}
            score={score}
          />
        );
      })}
    </ul>
  );
}
