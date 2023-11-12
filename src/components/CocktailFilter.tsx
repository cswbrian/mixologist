import { useState } from "react";
import { cocktails } from "../const/cocktails";
import type { Taste } from "type";
import { tasteColorMapping } from "../const";
// import Clear from "@icon/clear.svg";
import CocktailCardList from "./CocktailCardList";
import SearchBox from "./SearchBox";

export default function CocktailFilter() {
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
          <SearchBox
            placeholder="Search cocktails..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
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
        <div className="h-[500px]">
          <CocktailCardList cocktails={filteredResult} />
        </div>
      </div>
    </div>
  );
}
