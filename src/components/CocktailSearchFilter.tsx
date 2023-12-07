import { useState } from "react";
import SearchBox from "@components/SearchBox";
import { tasteColorMapping } from "../const";
import type { Taste } from "type";
import { ingredients } from "../const/ingredients";
import { groupByType } from "src/helper/ingredient";
import Filter from "@components/icons/Filter";
import Close from "@components/icons/Close";

interface Props {
  selectedFilter: any;
  onFilterApply: any;
}

export default function CocktailSearchFilter({
  selectedFilter,
  onFilterApply,
}: Props): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFilterExpanded, setIsSearchFilterExpanded] = useState(false);
  const [temporarilySelectedFilter, setTemporarilySelectedFilter] =
    useState(selectedFilter);

  const groupedIngredients = groupByType(ingredients);

  const filteredIngredients = groupedIngredients
    .map((groupedIngredient) => {
      const ingredients = groupedIngredient.ingredients
        .map((ingredient) => ingredient.name)
        .filter((name) =>
          name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return {
        ...groupedIngredient,
        ingredients,
      };
    })
    .filter((groupedIngredient) => groupedIngredient.ingredients.length > 0);

  const filterCriteriaCount = Object.values(temporarilySelectedFilter).reduce(
    (a, c) => a + c.length,
    0,
  );

  return (
    <>
      {isSearchFilterExpanded ? (
        <div className="absolute bg-dynamic w-full top-16 left-0 z-10 border border-t-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm">
          <div className="p-4 flex justify-between">
            <h1 className="font-bold">Advanced Filter</h1>
            <div
              onClick={() => setIsSearchFilterExpanded(!isSearchFilterExpanded)}
            >
              <Close className="w-6 h-6" />
            </div>
          </div>
          <div className="px-4">
            <SearchBox
              placeholder="Search filter items..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
          </div>
          <div className="fixed bottom-0 w-full flex border-t-2 border-dynamic bg-dynamic">
            <button
              className="p-4 flex-grow text-center border-r-2 border-dynamic"
              type="button"
              onClick={() => {
                setTemporarilySelectedFilter(() => selectedFilter);
              }}
            >
              Clear
            </button>
            <button
              className="p-4 flex-grow text-center border-dynamic"
              type="button"
              onClick={() => {
                setIsSearchFilterExpanded(!isSearchFilterExpanded);
                onFilterApply(temporarilySelectedFilter);
              }}
            >
              Apply
            </button>
          </div>
          <div className="flex flex-col gap-8 p-4">
            <section>
              <h2 className="text-md font-bold mb-2">Tastes</h2>
              <div className="flex flex-wrap gap-2">
                {Object.keys(tasteColorMapping).map((taste) => {
                  const lowerCaseTaste = taste.toLocaleLowerCase();
                  const isChecked =
                    temporarilySelectedFilter.tastes.includes(lowerCaseTaste);
                  return (
                    <label key={taste}>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={taste}
                        checked={isChecked}
                        onChange={() => {
                          let newTastes = [];
                          if (isChecked) {
                            newTastes = temporarilySelectedFilter.tastes.filter(
                              (selectedTaste: Taste) =>
                                selectedTaste !== lowerCaseTaste,
                            );
                          } else {
                            newTastes = [
                              ...temporarilySelectedFilter.tastes,
                              lowerCaseTaste,
                            ];
                          }
                          setTemporarilySelectedFilter({
                            ...temporarilySelectedFilter,
                            tastes: newTastes,
                          });
                        }}
                      />
                      <span
                        className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center cursor-pointer ${
                          isChecked
                            ? `${tasteColorMapping[taste as Taste]} text-black`
                            : `bg-dynamic`
                        }`}
                      >
                        {taste}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
            <section>
              <h2 className="text-md font-bold mb-2">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {["Cocktail", "Ordinary Drink"].map((category) => {
                  const lowerCaseCategory = category.toLocaleLowerCase();
                  const isChecked =
                    temporarilySelectedFilter.categories.includes(
                      lowerCaseCategory,
                    );
                  return (
                    <label key={category}>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={category}
                        checked={isChecked}
                        onChange={() => {
                          let newCategories = [];
                          if (isChecked) {
                            newCategories =
                              temporarilySelectedFilter.categories.filter(
                                (selectedCategory) =>
                                  selectedCategory !== lowerCaseCategory,
                              );
                          } else {
                            newCategories = [
                              ...temporarilySelectedFilter.categories,
                              lowerCaseCategory,
                            ];
                          }
                          setTemporarilySelectedFilter({
                            ...temporarilySelectedFilter,
                            categories: newCategories,
                          });
                        }}
                      />
                      <span
                        className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center cursor-pointer	 ${
                          isChecked ? `bg-yellow-300 text-black` : `bg-dynamic`
                        }`}
                      >
                        {category}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
            <section>
              <h2 className="text-md font-bold mb-2">Ingredients</h2>
              {filteredIngredients.map((groupedIngredient) => (
                <div key={groupedIngredient.name}>
                  <h3 className="font-bold mb-2">{groupedIngredient.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {groupedIngredient.ingredients.map((ingredient) => {
                      const lowerCaseIngredientName =
                        ingredient.toLocaleLowerCase();
                      const isChecked =
                        temporarilySelectedFilter.ingredients.includes(
                          lowerCaseIngredientName,
                        );

                      return (
                        <label key={ingredient.name}>
                          <input
                            className="hidden"
                            type="checkbox"
                            value={ingredient.name}
                            checked={isChecked}
                            onChange={() => {
                              let newIngredients = [];
                              if (isChecked) {
                                newIngredients =
                                  temporarilySelectedFilter.ingredients.filter(
                                    (selectedIngredient) =>
                                      selectedIngredient !==
                                      lowerCaseIngredientName,
                                  );
                              } else {
                                newIngredients = [
                                  ...temporarilySelectedFilter.ingredients,
                                  lowerCaseIngredientName,
                                ];
                              }
                              setTemporarilySelectedFilter({
                                ...temporarilySelectedFilter,
                                ingredients: newIngredients,
                              });
                            }}
                          />
                          <span
                            className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center cursor-pointer ${
                              isChecked
                                ? `bg-yellow-300 text-black`
                                : `bg-dynamic`
                            }`}
                          >
                            {ingredient}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      ) : (
        <button
          className="relative p-2 border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center"
          type="button"
          onClick={() => setIsSearchFilterExpanded(true)}
        >
          <Filter className="w-6 h-6 fill-dynamic" />
          {filterCriteriaCount > 0 && (
            <span className="absolute flex justify-center items-center -top-3 -right-3 bg-black text-white rounded-full text-[.625rem] min-w-[1.5rem] min-h-[1.5rem]">
              {filterCriteriaCount}
            </span>
          )}
        </button>
      )}
    </>
  );
}
