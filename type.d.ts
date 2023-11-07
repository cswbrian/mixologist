export type Taste =
  | "Fresh"
  | "Sour"
  | "Sweet"
  | "Bitter sweet"
  | "Salty"
  | "Boozy"
  | "Spicy"
  | "Nutty"
  | "Creamy"
  | "Fruity"
  | "Tart"
  | "Umami"
  | "Herbal"
  | "Floral"
  | "Smoky";

export type CocktailIngredients = {
  name: string;
  amount: {
    oz?: string;
    ml?: string;
    cl?: string;
    shot?: string;
    custom?: string;
  };
};

export type Cocktail = {
  name: string;
  timing: string;
  tastes: Taste[];
  ingredients: CocktailIngredients[];
  garnishes?: {
    name: string;
    amount: {
      custom?: string;
    };
  }[];
  catagory: string;
  iba: string | null;
  alcoholic: string;
  glass: string;
  instructions: string;
};

export type Ingredient = {
  name: string;
  description: string;
  type: string;
  isAlcoholic: boolean;
  abv: number;
};
