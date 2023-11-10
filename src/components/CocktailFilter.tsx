import { useState } from "react";
import { cocktails } from "../const/cocktails";
import type { Taste } from "type";
import { tasteColorMapping } from "../const";
// import Clear from "@icon/clear.svg";
import CocktailCardList from "./CocktailCardList";

export default function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTastes, setSelectedTastes] = useState<Taste[]>([]);

  const filteredResult = cocktails
    .filter((item) => {
      if (selectedTastes.length) {
        return item.tastes.some((taste) => selectedTastes.includes(taste));
      }
      return true;
    })
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <input
            type="text"
            className="p-2 flex-grow border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm bg-dynamic"
            placeholder="Search cocktails..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <button
            type="button"
            className="p-2 border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm"
            disabled={!searchQuery.length}
            onClick={() => {
              setSearchQuery("");
              setSelectedTastes([]);
            }}
          >
            <img className="w-6" src={Clear.src} alt="" />
          </button> */}
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(tasteColorMapping).map((taste) => {
            const isChecked = selectedTastes.includes(taste as Taste);
            return (
              <label key={taste}>
                <input
                  className="hidden"
                  type="checkbox"
                  value={taste}
                  checked={isChecked}
                  onChange={() => {
                    if (isChecked) {
                      setSelectedTastes(
                        selectedTastes.filter(
                          (selectedTaste) => selectedTaste !== taste,
                        ),
                      );
                    } else {
                      setSelectedTastes([...selectedTastes, taste as Taste]);
                    }
                  }}
                />
                <span
                  className={`p-2 text-xs font-bold border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center cursor-pointer	 ${
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

        <CocktailCardList cocktails={filteredResult} />
      </div>
    </div>
  );
}
