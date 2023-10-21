import { useState } from "react"
import { useStore } from '@nanostores/react';
import { ingredientsInventory } from '../inventoryStore';
import { cocktails } from '../cocktailStore';

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
        return {
            ...cocktail,
            matchedCount: countMatches($ingredientsInventory, cocktailIngredents)
        }
    })

    const sortedResult = matchedResult.sort((a, b) => {
        return b.matchedCount / b.ingredients.length - a.matchedCount / a.ingredients.length
    })

    const regex = new RegExp(searchQuery, 'i');
    const filteredResult = sortedResult.filter(item => item.name.match(regex))
    return (
        <>
            <input type="text" onChange={e => setSearchQuery(e.target.value)} />
            <div>Inventory: {
                $ingredientsInventory.join(', ')
            }</div>
            <div>Count: {sortedResult.length}</div>

            <ul>
                {
                    filteredResult.map(({ name, taste, ingredients }) => {
                        return <div key={name}>
                            <b><a href={`/mixologist/cocktails/${name.toLocaleLowerCase().replace(/ /g, '-')}`}>{name}</a></b> - {taste}
                            <ul>{ingredients.map(({ name, amount, unit }) => {
                                if ($ingredientsInventory.includes(name)) {
                                    return <li>{name} - {amount} {unit}</li>
                                }
                                return <li><s>{name} - {amount} {unit}</s></li>
                            })}</ul>
                        </div>
                    })
                }
            </ul>
        </>
    )
}