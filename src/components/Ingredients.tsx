import { convertToValidPathname } from "src/helper";
import { useIngredientsInventory } from "src/hooks/useIngredientsInventory";
import type { CocktailIngredients } from "type";

const unitsOrder = ["ml", "oz", "cl", "shot"];

interface IngredientsProps {
  ingredients: CocktailIngredients[];
}

function getUnit(cocktailIngredient: CocktailIngredients) {
  for (const unit of unitsOrder) {
    if (cocktailIngredient.amount[unit]) {
      return `${cocktailIngredient.amount[unit]} ${unit}`;
    }
  }

  return cocktailIngredient.amount["custom"];
}

export default function CocktailIngredientList({
  ingredients,
}: IngredientsProps) {
  const { ingredientsInventory } = useIngredientsInventory();
  return (
    <ul>
      {ingredients.map((ingredient, index) => {
        const { name } = ingredient;
        return (
          <li key={`${name}-${index}`}>
            <a href={`/mixologist/ingredients/${convertToValidPathname(name)}`}>
              {ingredientsInventory.includes(name.toLocaleLowerCase()) ? (
                <>
                  {name} - {getUnit(ingredient)}
                </>
              ) : (
                <s>
                  {name} - {getUnit(ingredient)}
                </s>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
