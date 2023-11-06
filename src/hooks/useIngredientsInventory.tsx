import { useEffect, useState } from "react";

export const useIngredientsInventory = () => {
  const [ingredientsInventory, setIngredientsInventory] = useState<string[]>(
    [],
  );

  useEffect(() => {
    const storedIngredientsInventory = localStorage.getItem(
      "ingredientsInventory",
    );

    if (storedIngredientsInventory) {
      const parsedIngredientsInventory = JSON.parse(storedIngredientsInventory);
      setIngredientsInventory(parsedIngredientsInventory);
    }
  }, []);

  const updateIngredientsInventory = (newInventory: string[]) => {
    setIngredientsInventory(newInventory);
    localStorage.setItem("ingredientsInventory", JSON.stringify(newInventory));
  };

  return { ingredientsInventory, updateIngredientsInventory };
};
