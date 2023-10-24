import { useState } from "react"
import { useStore } from "@nanostores/react";
import { ingredientsInventory } from "../inventoryStore";
import { cocktails } from "../cocktailStore";



const tasteColorMapping = {
    "Sour": "bg-yellow-400",
    "Fresh": "bg-green-400",
    "Sweet": "bg-pink-300",
    "Boozy": "bg-orange-400",
    "Unknown": "bg-stone-300",
    "Salty": "bg-cyan-400",
    "Bitter sweet": "bg-fuchsia-400",
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

    const filteredResult = sortedResult.filter(item => item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
    return (
        <div className="flex flex-col gap-6">
            <input
                type="text" 
                className="p-2 border border-b-4 border-r-4 border-black rounded-lg shadow-xs hover:shadow-sm"
                placeholder="Search cocktails..." onChange={e => setSearchQuery(e.target.value)}
             />

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