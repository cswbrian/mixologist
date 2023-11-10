import React from "react";
import { convertToValidPathname } from "src/helper";
import { useIngredientsInventory } from "src/hooks/useIngredientsInventory";

interface CheckboxListProps {
  ingredients: string[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ ingredients }) => {
  // Load the selected ingredients from local storage on component mount
  const { ingredientsInventory, updateIngredientsInventory } =
    useIngredientsInventory();

  // Update the selected ingredients and save to local storage
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLocaleLowerCase();

    const updatedSelectedIngredients = [...ingredientsInventory];

    if (event.target.checked) {
      updatedSelectedIngredients.push(value);
    } else {
      const index = updatedSelectedIngredients.indexOf(value);
      if (index > -1) {
        updatedSelectedIngredients.splice(index, 1);
      }
    }
    updateIngredientsInventory(updatedSelectedIngredients);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {ingredients.sort().map((ingredient) => {
        const isChecked = ingredientsInventory.includes(
          ingredient.toLocaleLowerCase(),
        );
        return (
          <div
            key={ingredient}
            className={`flex gap-x-2 justify-center items-center p-2 text-xsfont-bold border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm  ${
              isChecked ? `bg-yellow-400 text-black` : `bg-dynamic`
            }`}
          >
            <label>
              <a
                href={`/mixologist/ingredients/${convertToValidPathname(
                  ingredient,
                )}`}
              >
                {ingredient}
              </a>
            </label>

            <input
              className="w-4 h-4 accent-pink-500"
              type="checkbox"
              value={ingredient}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxList;
