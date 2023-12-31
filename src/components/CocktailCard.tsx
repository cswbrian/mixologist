import type { Taste, CocktailIngredients } from "type";
import { tasteColorMapping } from "../const";
import CocktailIngredientList from "@components/CocktailIngredientList";
import { convertToValidPathname } from "src/helper";

interface Props {
  name: string;
  tastes: Taste[];
  ingredients: CocktailIngredients[];
  score?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function CocktailCard({
  name,
  tastes,
  ingredients,
  score,
}: Props): JSX.Element {
  return (
    <li>
      <a href={`/mixologist/cocktails/${convertToValidPathname(name)}`}>
        <div
          className={`block p-4 border border-b-4 border-r-4 border-dynamic rounded-lg shadow-xs hover:shadow-sm text-black 
                            ${tasteColorMapping[tastes.length && tastes[0]]} ${
                              score && score < 1 ? `opacity-60` : ``
                            }`}
        >
          <div className="flex justify-between">
            <span className="font-bold">{name}</span>
            <span className="">{tastes.join(", ")}</span>
          </div>
          <CocktailIngredientList ingredients={ingredients} />
        </div>
      </a>
    </li>
  );
}
