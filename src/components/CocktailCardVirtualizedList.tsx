import { useEffect, useRef } from "react";
import type { Cocktail } from "type";
import CocktailCard from "@components/CocktailCard";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

interface Props {
  cocktails: Cocktail[];
}

export default function CocktailVirtualizedList({
  cocktails,
}: Props): JSX.Element {
  // References
  const listRef = useRef({});
  const rowHeights = useRef({});

  function getRowHeight(index) {
    return rowHeights.current[index] + 8 || 82;
  }

  function Row({ index, style }) {
    const rowRef = useRef({});
    const { name, tastes, ingredients, score } = cocktails[index];

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.clientHeight);
      }
    }, [rowRef]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          <CocktailCard
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
            key={`${index}`}
            name={name}
            tastes={tastes}
            ingredients={ingredients}
            score={score}
          />
        </div>
      </div>
    );
  }

  function setRowHeight(index, size) {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  }

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            className="List"
            innerElementType="ul"
            height={height}
            itemCount={cocktails.length}
            itemSize={getRowHeight}
            ref={listRef}
            width={width}
          >
            {Row}
          </List>
        );
      }}
    </AutoSizer>
  );
}
