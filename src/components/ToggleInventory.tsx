import { useIngredientsInventory } from "src/hooks/useIngredientsInventory";

interface Props {
  ingredient: string;
}
export default function ToggleInventory({ ingredient }: Props) {
  const ingredientName = ingredient.toLocaleLowerCase();
  const { ingredientsInventory, updateIngredientsInventory } =
    useIngredientsInventory();
  const isInInventory = ingredientsInventory.includes(ingredientName);

  const handleClick = () => {
    const ingredientName = ingredient.toLocaleLowerCase();
    const updatedSelectedIngredients = [...ingredientsInventory];

    if (!isInInventory) {
      updatedSelectedIngredients.push(ingredientName);
    } else {
      const index = updatedSelectedIngredients.indexOf(ingredientName);
      if (index > -1) {
        updatedSelectedIngredients.splice(index, 1);
      }
    }
    updateIngredientsInventory(updatedSelectedIngredients);
  };

  return (
    <p className="text-xs underline" onClick={handleClick}>
      {isInInventory ? "Remove from your inventory" : "Add to your inventory"}
    </p>
  );
}
