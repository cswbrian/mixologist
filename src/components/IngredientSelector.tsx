import React, { useState, useEffect } from 'react';
import { ingredientsInventory } from '../inventoryStore';


interface CheckboxListProps {
  ingredients: string[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ ingredients }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // Load the selected ingredients from local storage on component mount
  useEffect(() => {
    const savedSelectedIngredients = ingredientsInventory // localStorage.getItem('selectedIngredients');

    if (savedSelectedIngredients) {
      setSelectedIngredients(savedSelectedIngredients.get());
    }
  }, []);

  // Update the selected ingredients and save to local storage
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelectedIngredients((prevSelectedIngredients) => {
      const updatedSelectedIngredients = [...prevSelectedIngredients];

      if (event.target.checked) {
        updatedSelectedIngredients.push(value);
      } else {
        const index = updatedSelectedIngredients.indexOf(value);
        if (index > -1) {
          updatedSelectedIngredients.splice(index, 1);
        }
      }

      // Save the updated selected ingredients to local storage
      ingredientsInventory.set(updatedSelectedIngredients)
      // localStorage.setItem(
      //   'selectedIngredients',
      //   JSON.stringify(updatedSelectedIngredients)
      // );

      return updatedSelectedIngredients;
    });
  };


  return (
    <div className='flex flex-wrap gap-2'>
      {ingredients.sort().map((ingredient) => {
        const isChecked = selectedIngredients.includes(ingredient)
      return (
        <label key={ingredient}>
          <input
            className='hidden'
            type="checkbox"
            value={ingredient}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className={`p-2 text-xs	font-bold border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center ${isChecked ? `bg-yellow-400` : `bg-white`}`}>{ingredient}</span>
        </label>
      )
      })}
    </div>
  );
};

export default CheckboxList;


