import { useState } from "react";
import { cocktails } from "../const/cocktails";
import SearchBox from "@components/SearchBox";
import CocktailCardList from "./CocktailCardList";
import CocktailSearchFilter from "./CocktailSearchFilter";

const DEFAULT_FILTER = {
  tastes: [],
  alcoholic: [],
  categories: [],
  ingredients: [],
  glass: [],
};

export default function CocktailList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(DEFAULT_FILTER);

  const filteredResult = cocktails
    .filter((item) => {
      const tasteMatch =
        selectedFilter.tastes.length === 0 ||
        item.tastes.some((taste) =>
          selectedFilter.tastes.includes(taste.toLowerCase()),
        );

      const categoryMatch =
        selectedFilter.categories.length === 0 ||
        selectedFilter.categories.includes(item.category.toLowerCase());

      const ingredientMatch =
        selectedFilter.ingredients.length === 0 ||
        selectedFilter.ingredients.every((ingredient) =>
          item.ingredients.some(
            (cocktailIngredient) =>
              cocktailIngredient.name.toLowerCase() ===
              ingredient.toLowerCase(),
          ),
        );

      return tasteMatch && categoryMatch && ingredientMatch;
    })
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <SearchBox
            placeholder="Search cocktails..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
          <CocktailSearchFilter
            defaultFilter={DEFAULT_FILTER}
            selectedFilter={selectedFilter}
            onFilterApply={(value) => {
              setSelectedFilter(value);
            }}
          />
        </div>

        <div>
          <CocktailCardList cocktails={filteredResult} />
        </div>
      </div>
    </div>
  );
}
