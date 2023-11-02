import { persistentAtom } from "@nanostores/persistent";

export type IngredientsInventory = string;

export const ingredientsInventory = persistentAtom<IngredientsInventory[]>(
  "ingredientsInventory",
  [],
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);
