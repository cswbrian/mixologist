import { useState } from "react"
import { useStore } from "@nanostores/react";
import { ingredientsInventory } from "../inventoryStore";
import { cocktails } from "../cocktailStore";



const tasteColorMapping = {
    "Fresh": "bg-green-400",
    "Sour": "bg-yellow-400",
    "Sweet": "bg-pink-300",
    "Bitter sweet": "bg-fuchsia-400",
    "Salty": "bg-cyan-400",
    "Boozy": "bg-orange-400",
    "Unknown": "bg-stone-300",
}

type TasteColorMapping = keyof typeof tasteColorMapping

function countMatches(arr1: string[], arr2: string[]): number {
    let count = 0;

    for (const element of arr1) {
        if (arr2.includes(element)) {
            count++;
        }
    }

    return count;
};

export default function Recipes() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTastes, setSelectedTastes] = useState<TasteColorMapping[]>([])
    const $ingredientsInventory = useStore(ingredientsInventory);

    const matchedResult = cocktails.map(cocktail => {
        const cocktailIngredents = cocktail.ingredients.map(ingredient => ingredient.name)
        const matchedCount = countMatches($ingredientsInventory, cocktailIngredents)
        return {
            ...cocktail,
            matchedCount,
            score: matchedCount / cocktail.ingredients.length
        }
    })

    const sortedResult = matchedResult.sort((a, b) => {
        return b.score - a.score
    })

    const filteredResult = sortedResult.filter(item => {
        return item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) && 
            selectedTastes.length ? selectedTastes.includes(item.taste) : true
    })
    return (
        <div className="flex flex-col gap-4">
            <input
                type="text" 
                className="p-2 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
                placeholder="Search cocktails..." onChange={e => setSearchQuery(e.target.value)}
             />

            <div className="flex flex-wrap gap-2">
             {
                Object.keys(tasteColorMapping).map(taste => {
                    const isChecked = selectedTastes.includes(taste)
                    return <label>
                    <input
                      className='hidden'
                      type="checkbox"
                      value={taste}
                      checked={isChecked}
                      onChange={() => {
                        if (isChecked) {
                            setSelectedTastes(selectedTastes.filter(selectedTaste => selectedTaste !== taste))
                        } else {
                            setSelectedTastes([...selectedTastes, taste])
                        }
                      }}
                    />
                    <span className={`p-2 text-xs	font-bold border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm flex justify-center items-center ${isChecked ? tasteColorMapping[taste as TasteColorMapping] : `bg-white`}`}>{taste}</span>
                  </label>
                })
             }

            </div>

            <ul className="flex flex-col gap-6">
                {
                    filteredResult.map(({ name, taste, ingredients, score }) => {
                        return <a href={`/mixologist/cocktails/${name.toLocaleLowerCase().replace(/ /g, "-")}`}>
                            <div key={name} className={`p-4 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm ${tasteColorMapping[taste as TasteColorMapping]} ${score < 1 ? `opacity-60`: ``}`}>
                                <div className="flex justify-between">
                                <span className="font-bold">{name}</span>
                                <span className="">{taste}</span>
                                </div>
                                <ul>
                                    {ingredients.map(({ name, amount, unit }) => {
                                    if ($ingredientsInventory.includes(name)) {
                                        return <li>{name} - {amount} {unit}</li>
                                    }
                                    return <li><s>{name} - {amount} {unit}</s></li>
                                })}</ul>
                            </div>
                        </a>
                    })
                }
            </ul>
        </div>
    )
}