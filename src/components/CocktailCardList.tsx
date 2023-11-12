import type { Cocktail } from "type";
import { useIngredientsInventory } from "src/hooks/useIngredientsInventory";
import CocktailVirtualizedList from "./CocktailCardVirtualizedList";

interface Props {
  cocktails: Cocktail[];
}

const countMatches = (arr1: string[], arr2: string[]): number => {
  const arr1LowerCase = arr1.map((i) => i.toLocaleLowerCase());
  const arr2LowerCase = arr2.map((i) => i.toLocaleLowerCase());
  let count = 0;

  for (const element of arr1LowerCase) {
    if (arr2LowerCase.includes(element)) {
      count++;
    }
  }

  return count;
};

export default function CocktailCardList({ cocktails }: Props): JSX.Element {
  const { ingredientsInventory } = useIngredientsInventory();
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

  const sortedResult = matchedResult.sort((a, b) => {
    return b.score - a.score;
  });

  return (
    <div className="h-[500px]">
      <CocktailVirtualizedList cocktails={sortedResult} />
    </div>
  );
}
