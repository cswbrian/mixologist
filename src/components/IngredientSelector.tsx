import React from "react";
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
          <label key={ingredient}>
            <input
              className="hidden"
              type="checkbox"
              value={ingredient}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`p-2 text-xs	font-bold border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center ${
                isChecked ? `bg-yellow-400` : `bg-white`
              }`}
            >
              {ingredient}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default CheckboxList;
