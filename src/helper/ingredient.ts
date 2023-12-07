export const groupByType = (ingredients) => {
  const types = {};

  for (const ingredient of ingredients) {
    let type = ingredient.type;

    if (!type) {
      type = "Others";
    }

    if (!types[type]) {
      types[type] = [];
    }

    types[type].push(ingredient);
  }

  return Object.entries(types).map(([type, ingredients]) => ({
    name: type,
    ingredients,
  }));
};
