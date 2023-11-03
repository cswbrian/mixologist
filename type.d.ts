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
  | "Smoky"
  | "Unknown";

export type Cocktail = {
  name: string;
  timing: string;
  tastes: Taste[];
  ingredients: {
    name: string;
    amount: string | number;
    unit: string;
  }[];
  preparation: string;
};

export type Ingredient = {
  name: string;
  description: string;
  type: string;
  isAlcoholic: boolean;
  abv: number;
};
