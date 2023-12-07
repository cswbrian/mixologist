import type { Cocktail } from "type";

export const cocktails: Cocktail[] = [
  {
    name: "Mojito",
    timing: "",
    tastes: ["Fresh", "Sour", "Sweet", "Herbal"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
          ml: "60",
          cl: "6",
          shot: "2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1/2",
          ml: "15",
          cl: " 1 1/2",
          shot: "1/2",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          oz: "1/3",
          ml: "10",
          cl: "1",
          shot: "1/2",
        },
      },
      {
        name: "Club soda",
        amount: {
          custom: "to top",
        },
      },
    ],
    garnishes: [
      {
        name: "Mint",
        amount: {
          custom: "14 fresh",
        },
      },
    ],
    category: "Cocktail",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
  },
  {
    name: "Old Fashioned",
    timing: "",
    tastes: ["Bitter sweet", "Boozy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "1 1/2",
          ml: "45",
          cl: "4 1/2",
          shot: "1",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 Cube",
        },
      },
    ],
    garnishes: [
      {
        name: "Orange",
        amount: {
          custom: "1 Twist",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved.\r\nFill the glass with ice cubes and add whiskey.\r\n\r\nGarnish with orange twist, and a cocktail cherry.",
  },
  {
    name: "Long Island Tea",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.",
  },
  {
    name: "Negroni",
    timing: "",
    tastes: ["Bitter sweet", "Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Campari",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions: "Stir into glass over ice, garnish and serve.",
  },
  {
    name: "Whiskey Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/2 slice",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
  },
  {
    name: "Dry Martini",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 2/3",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Olive",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
  },
  {
    name: "Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
  },
  {
    name: "Margarita",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  },
  {
    name: "Manhattan",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Bourbon",
        amount: {
          custom: "2 1/2 oz blended",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "dash",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "2 or 3",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stirred over ice, strained into a chilled glass, garnished, and served up.",
  },
  {
    name: "Moscow Mule",
    timing: "",
    tastes: ["Sour", "Spicy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          oz: "8",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Copper Mug",
    instructions:
      "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.",
  },
  {
    name: "After Dinner Cocktail",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients (except lime wedge) with ice and strain into a cocktail glass. Add the wedge of lime and serve.",
  },
  {
    name: "After Supper Cocktail",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Alabama Slammer",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Southern Comfort",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sloe Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour all ingredients (except for lemon juice) over ice in a highball glass. Stir, add a dash of lemon juice, and serve.",
  },
  {
    name: "Alaska Cocktail",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Yellow Chartreuse",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass. Drop in a twist of lemon and serve.",
  },
  {
    name: "Alexander",
    timing: "",
    tastes: ["Creamy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          custom: "1/2 oz white",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Brandy Alexander",
    timing: "",
    tastes: ["Creamy"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          custom: "1 oz white",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey Glass",
    instructions:
      "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Alfie Cocktail",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Lemon Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Combine and shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Algonquin",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Combine and shake all ingredients with ice, strain contents into a cocktail glass, and serve.",
  },
  {
    name: "Allegheny",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Blackberry Brandy",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients (except lemon peel) with ice and strain into a cocktail glass. Top with the twist of lemon peel and serve.",
  },
  {
    name: "Allies Cocktail",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Kummel",
        amount: {
          custom: "1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
  },
  {
    name: "Almeria",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Almond Joy",
    timing: "",
    tastes: ["Nutty", "Sweet"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          custom: "1/2 oz white",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Amaretto and Cream",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake well with cracked ice, strain contents into a cocktail glass, and serve.",
  },
  {
    name: "Amaretto Mist",
    timing: "",
    tastes: ["Nutty"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour amaretto in an old-fashioned glass over crushed ice. Add the wedge of lime and serve. (A wedge of lemon may be substituted for lime, if preferred.)",
  },
  {
    name: "Amaretto Rose",
    timing: "",
    tastes: ["Nutty", "Floral"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Club Soda",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour amaretto and lime juice over ice in a collins glass. Fill with club soda and serve.",
  },
  {
    name: "Amaretto Stinger",
    timing: "",
    tastes: ["Nutty"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "White Creme De Menthe",
        amount: {
          oz: "3/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake ingredients well with cracked ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Amaretto Tea",
    timing: "",
    tastes: ["Nutty"],
    ingredients: [
      {
        name: "Tea",
        amount: {
          custom: "6 oz hot",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "chilled",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pousse cafe glass",
    instructions:
      "Pour hot tea into a pousse-cafe glass, using a spoon in glass to prevent cracking. Add amaretto, but do not stir. Top with chilled whipped cream and serve.",
  },
  {
    name: "Angel Face",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Apple Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice and strain contents into a cocktail glass.",
  },
  {
    name: "Applecar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Applejack",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Apricot Lady",
    timing: "",
    tastes: ["Fruity"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the rum, apricot brandy, triple sec, lemon juice, and egg white. Shake well. Strain into an old-fashioned glass almost filled with ice cubes. Garnish with the orange slice.",
  },
  {
    name: "Archbishop",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Wine",
        amount: {
          custom: "1 oz green ginger",
        },
      },
      {
        name: "Benedictine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
  },
  {
    name: "Arise My Love",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Champagne",
        amount: {
          custom: "chilled",
        },
      },
      {
        name: "Green Creme De Menthe",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Put creme de menthe into a champagne flute. Fill with chilled champagne and serve.",
  },
  {
    name: "Arthur Tompkins",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the gin, Grand Marnier, and lemon juice. Shake well. Strain into a sour glass and garnish with the lemon twist.",
  },
  {
    name: "Artillery",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Balmoral",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
  },
  {
    name: "Banana Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
  },
  {
    name: "Bermuda Highball",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour brandy, gin, and dry vermouth into a highball glass over ice cubes. Fill with carbonated water and stir. Add the twist of lemon and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
  },
  {
    name: "Black Russian",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee Liqueur",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour the ingredients into an old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    name: "Blackthorn",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sloe Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir sloe gin and vermouth with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
  },
  {
    name: "Bloody Maria",
    timing: "",
    tastes: ["Spicy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Tomato Juice",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Tabasco Sauce",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Celery Salt",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 slice",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
  },
  {
    name: "Bloody Mary",
    timing: "",
    tastes: ["Spicy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Tomato Juice",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Worcestershire Sauce",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Tabasco Sauce",
        amount: {
          custom: "2-3 drops",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1 wedge",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Stirring gently, pour all ingredients into highball glass. Garnish.",
  },
  {
    name: "Blue Lagoon",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour vodka and curacao over ice in a highball glass. Fill with lemonade, top with the cherry, and serve.",
  },
  {
    name: "Blue Margarita",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "coarse",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
  },
  {
    name: "Blue Mountain",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Añejo Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Tia Maria",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into an old-fashioned glass almost filled with ice cubes.",
  },
  {
    name: "Bluebird",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with crushed ice, combine the gin, triple sec, Curacao, and bitters. Stir well. Strain into a cocktail glass and garnish with the lemon twist and the cherry.",
  },
  {
    name: "Bobby Burns Cocktail",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Benedictine",
        amount: {
          custom: "1 1/4 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
  },
  {
    name: "Boomerang",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine the gin, vermouth, bitters, and maraschino liqueur. Stir well. Strain into a cocktail glass and garnish with the cherry.",
  },
  {
    name: "Boston Sidecar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Boston Sour",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake juice of lemon, powdered sugar, blended whiskey, and egg white with cracked ice and strain into a whiskey sour glass. Add the slice of lemon, top with the cherry, and serve.",
  },
  {
    name: "Classic Old-fashioned",
    timing: "",
    tastes: ["Bitter sweet", "Boozy"],
    ingredients: [
      {
        name: "Bitters",
        amount: {
          custom: "3 dashes",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick.",
  },
  {
    name: "Bourbon Sling",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the sugar, water, lemon juice, and bourbon. Shake well. Strain well. Strain into a highball glass. Garnish with the lemon twist.",
  },
  {
    name: "Bourbon Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp superfine",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the bourbon, lemon juice, and sugar. Shake well. Strain into a whiskey sour glass, garnish with the orange slice and cherry.",
  },
  {
    name: "Boxcar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
  },
  {
    name: "Brandy Cobbler",
    timing: "",
    tastes: ["Fruity"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the brandy. Stir well. Garnish with the cherry and the orange and lemon slices.",
  },
  {
    name: "Brandy Flip",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "1/8 tsp grated",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the brandy, egg, sugar, and cream. Shake well. Strain into a sour glass and garnish with the nutmeg.",
  },
  {
    name: "Brandy Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/2 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake brandy, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with the lemon slice, top with the cherry, and serve.",
  },
  {
    name: "Caipirinha",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Cachaca",
        amount: {
          oz: "2 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with ice and add the Cachaça.",
  },
  {
    name: "California Lemonade",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over shaved ice. Fill with carbonated water and stir. Decorate with slices of orange and lemon. Add the cherry and serve with a straw.",
  },
  {
    name: "Casa Blanca",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Casino Royale",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Egg Yolk",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a sour glass.",
  },
  {
    name: "Champagne Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Champagne",
        amount: {
          custom: "chilled",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 piece",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
      {
        name: "Cognac",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Add dash of Angostura bitter onto sugar cube and drop it into champagne flute. Add cognac followed by gently pouring chilled champagne. Garnish with orange slice and maraschino cherry.",
  },
  {
    name: "Cherry Rum",
    timing: "",
    tastes: ["Fruity"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/4",
        },
      },
      {
        name: "Cherry Brandy",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Chicago Fizz",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Port",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Chocolate Black Russian",
    timing: "",
    tastes: ["Boozy", "Sweet"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Chocolate Ice-cream",
        amount: {
          oz: "5",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Combine all ingredients in an electric blender and blend at a low speed for a short length of time. Pour into a chilled champagne flute and serve.",
  },
  {
    name: "City Slicker",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Clove Cocktail",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sloe Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Wine",
        amount: {
          custom: "1/2 oz muscatel",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Cuba Libre",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
  },
  {
    name: "Dragonfly",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
  },
  {
    name: "Dry Rob Roy",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine the Scotch and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
  },
  {
    name: "Dubonnet Cocktail",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Dubonnet Rouge",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients (except lemon peel) with ice and strain into a cocktail glass. Add the twist of lemon peel and serve.",
  },
  {
    name: "English Highball",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour brandy, gin, and sweet vermouth into a highball glass over ice cubes. Fill with carbonated water. Add the twist of lemon peel, stir, and serve. (Ginger ale may be substituted for carbonated water, if preferred.)",
  },
  {
    name: "English Rose Cocktail",
    timing: "",
    tastes: ["Floral"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Rub rim of cocktail glass with lemon juice and dip rim of glass in powdered sugar. Shake all ingredients (except cherry) with ice and strain into sugar-rimmed glass. Top with the cherry and serve.",
  },
  {
    name: "Flying Dutchman",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine the gin and triple sec. Stir well.",
  },
  {
    name: "Flying Scotchman",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "1/4 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Foxy Lady",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
  },
  {
    name: "Frisco Sour",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Benedictine",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/4",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1 slice",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake all ingredients (except slices of lemon and lime) with ice and strain into a whiskey sour glass. Decorate with the slices of lemon and lime and serve.",
  },
  {
    name: "Frozen Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "1 cup crushed",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Combine all ingredients (except for the cherry) in an electric blender and blend at a low speed for five seconds, then blend at a high speed until firm. Pour contents into a champagne flute, top with the cherry, and serve.",
  },
  {
    name: "Frozen Mint Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "6",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into an old-fashioned glass and serve.",
  },
  {
    name: "Frozen Pineapple Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "4 chunks",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail Glass",
    instructions:
      "Combine all ingredients with 1 cup of crushed ice in an electric blender. Blend at a low speed for a short length of time. Pour into a cocktail glass and serve.",
  },
  {
    name: "Gentleman's Club",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass almost filled with ice cubes, combine all of the ingredients. Stir well.",
  },
  {
    name: "Gin and Tonic",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the gin and the tonic water into a highball glass almost filled with ice cubes. Stir well. Garnish with the lime wedge.",
  },
  {
    name: "Gin Cooler",
    timing: "",
    tastes: ["Fresh"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Orange Spiral",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice and add gin. Fill with carbonated water and stir. Add the lemon peel and the orange spiral so that the end of the orange spiral dangles over rim of glass.",
  },
  {
    name: "Gin Daisy",
    timing: "",
    tastes: ["Fresh"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp superfine",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the gin, lemon juice, sugar, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the cherry and the orange slice.",
  },
  {
    name: "Gin Fizz",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
  },
  {
    name: "Gin Sling",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Dissolve powdered sugar in mixture of water and juice of lemon. Add gin. Pour into an old-fashioned glass over ice cubes and stir. Add the twist of orange peel and serve.",
  },
  {
    name: "Gin Smash",
    timing: "",
    tastes: ["Fresh", "Herbal", "Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cube",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "4",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Muddle sugar with carbonated water and mint sprigs in an old-fashioned glass. Add gin and 1 ice cube. Stir, add the orange slice and the cherry, and serve.",
  },
  {
    name: "Gin Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp superfine",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
  },
  {
    name: "Gin Squirt",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "3 chunks",
        },
      },
      {
        name: "Strawberries",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Stir gin, grenadine, and powdered sugar with ice and strain into a highball glass over ice cubes. Fill with carbonated water and stir. Decorate with the pineapple chunks and the strawberries and serve.",
  },
  {
    name: "Gin Swizzle",
    timing: "",
    tastes: ["Fresh", "Boozy"],
    ingredients: [
      {
        name: "Lime Juice",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the lime juice, sugar, gin, and bitters. Shake well. Almost fill a colling glass with ice cubes. Stir until the glass is frosted. Strain the mixture in the shaker into the glass and add the club soda.",
  },
  {
    name: "Gin Toddy",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
  },
  {
    name: "Godchild",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Heavy Cream",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
  },
  {
    name: "Godfather",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "3/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    name: "Godmother",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "3/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour vodka and amaretto into an old-fashioned glass over ice and serve.",
  },
  {
    name: "Grass Skirt",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the gin, triple sec, pineapple juice, and grenadine. Shake well. Pour into an old-fashioned glass and garnish with the pineapple slice.",
  },
  {
    name: "Harvey Wallbanger",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Galliano",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Stir the vodka and orange juice with ice in the glass, then float the Galliano on top. Garnish and serve.",
  },
  {
    name: "Havana Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Hawaiian Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Highland Fling Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Olive",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients (except olive) with ice and strain into a cocktail glass. Add the olive and serve.",
  },
  {
    name: "Imperial Fizz",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Blended Whiskey",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Irish Spring",
    timing: "",
    tastes: ["Herbal", "Sweet"],
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Peach Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes. Garnish with the slice of orange, add the cherry on top, and serve.",
  },
  {
    name: "Jack Rose Cocktail",
    timing: "",
    tastes: ["Herbal", "Sweet"],
    ingredients: [
      {
        name: "Apple Brandy",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Japanese Fizz",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Port",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Jewel of the Nile",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Green Chartreuse",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Yellow Chartreuse",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
  },
  {
    name: "John Collins",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour all ingredients directly into highball glass filled with ice. Stir gently. Garnish. Add a dash of Angostura bitters.",
  },
  {
    name: "Kamikaze",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients together with ice. Strain into glass, garnish and serve.",
  },
  {
    name: "Kentucky B and B",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Benedictine",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Brandy snifter",
    instructions: "Pour the bourbon and Benedictine into a brandy snifter.",
  },
  {
    name: "Kentucky Colonel",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Benedictine",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes combine the courbon and Benedictine. Shake and strain into a cocktail glass. Garnish with the lemon twist.",
  },
  {
    name: "Lady Love Fizz",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a cocktail glass over two ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Loch Lomond",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Drambuie",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine the Scotch, Drambuie, and vermouth. Stir well. Strain into a cocktail glass. Garnish with the lemon twist.",
  },
  {
    name: "London Town",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
  },
  {
    name: "Lone Tree Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Lone Tree Cooler",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
      {
        name: "Gin",
        amount: {
          custom: "",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          custom: "",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Orange Spiral",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin and vermouth, and stir. Fill with carbonated water and stir again. Add the twist of lemon peel and the orange spiral so that the end dangles over rim of glass.",
  },
  {
    name: "Lord and Lady",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Tia Maria",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour the rum and Tia Maria into an old-fashioned glass almost filled with ice cubes. Stir well.",
  },
  {
    name: "Mai Tai",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orgeat Syrup",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients with ice. Strain into glass. Garnish and serve with straw.",
  },
  {
    name: "Martinez Cocktail",
    timing: "",
    tastes: ["Boozy", "Bitter sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients (except cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
  },
  {
    name: "Martini",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 2/3",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Olive",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
  },
  {
    name: "Midnight Cowboy",
    timing: "",
    tastes: ["Boozy", "Creamy"],
    ingredients: [
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Dark Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Heavy Cream",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Mississippi Planters Punch",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a collins glass over ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Monkey Wrench",
    timing: "",
    tastes: ["Boozy", "Spicy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour all of the ingredients into an old-fashioned glass almost filled with ice cubes. Stir well.",
  },
  {
    name: "New York Sour",
    timing: "",
    tastes: ["Sour", "Fresh"],
    ingredients: [
      {
        name: "Blended Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Red Wine",
        amount: {
          custom: "(claret)",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake blended whiskey, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Float claret on top. Decorate with the half-slice of lemon and the cherry and serve.",
  },
  {
    name: "Orange Oasis",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Cherry Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake brandy, gin, and orange juice with ice and strain into a highball glass over ice cubes. Fill with ginger ale, stir, and serve.",
  },
  {
    name: "Orgasm",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Creme De Cacao",
        amount: {
          custom: "1/2 oz white",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a chilled cocktail glass, and serve.",
  },
  {
    name: "Pink Gin",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Bitters",
        amount: {
          custom: "3 dashes",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "White wine glass",
    instructions:
      "Pour the bitters into a wine glass. Swirl the glass to coat the inside with the bitters, shake out the excess. Pour the gin into the glass. Do not add ice.",
  },
  {
    name: "Pink Lady",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Poppy Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          custom: "3/4 oz white",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Port and Starboard",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Grenadine",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Green Creme De Menthe",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pousse cafe glass",
    instructions:
      "Pour carefully into a pousse-cafe glass, so that creme de menthe floats on grenadine. Serve without mixing.",
  },
  {
    name: "Port Wine Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Port",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Port Wine Flip",
    timing: "",
    tastes: ["Boozy", "Creamy"],
    ingredients: [
      {
        name: "Port",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Quaker's Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/4",
        },
      },
      {
        name: "Raspberry Syrup",
        amount: {
          custom: "2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Quarter Deck Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          custom: "1 1/2",
        },
      },
      {
        name: "Sherry",
        amount: {
          custom: "1/3 oz cream",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Queen Bee",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sherry",
        amount: {
          custom: "1/2 oz cream",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Queen Charlotte",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon-lime Soda",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour red wine and grenadine into a collins glass over ice cubes. Fill with lemon-lime soda, stir, and serve.",
  },
  {
    name: "Queen Elizabeth",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Benedictine",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Quentin",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "1/8 tsp grated",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.",
  },
  {
    name: "Royal Fizz",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except cola) with ice and strain into a chilled collins glass. Fill with cola and serve.",
  },
  {
    name: "Royal Gin Fizz",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake all ingredients (except carbonated water) with ice and strain into a highball glass over two ice cubes. Fill with carbonated water, stir, and serve.",
  },
  {
    name: "Rum Cobbler",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Dark Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "In an old-fashioned glass, dissolve the sugar in the club soda. Add crushed ice until the glass is almost full. Add the rum. Stir well. Garnish with the cherry and the orange and lemon slices.",
  },
  {
    name: "Rum Cooler",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "2 oz light or dark",
        },
      },
      {
        name: "Lemon-lime Soda",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour the rum and soda into a collins glass almost filled with ice cubes. Stir well and garnish with the lemon wedge.",
  },
  {
    name: "Rum Milk Punch",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a collins glass. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Rum Old-fashioned",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lime Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve.",
  },
  {
    name: "Rum Screwdriver",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "5",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour rum into a highball glass over ice cubes. Add orange juice, stir, and serve.",
  },
  {
    name: "Rum Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp superfine",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the rum, lemon juice, and sugar. Shake well. Strain into a sour glass and garnish with the orange slice and the cherry.",
  },
  {
    name: "Rum Toddy",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "2 oz light or dark",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Dissolve powdered sugar in water in an old-fashioned glass. Add rum and one ice cube and stir. Add the twist of lemon peel and serve.",
  },
  {
    name: "Rusty Nail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Drambuie",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
  },
  {
    name: "Salty Dog",
    timing: "",
    tastes: ["Salty"],
    ingredients: [
      {
        name: "Grapefruit Juice",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1/4 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour all ingredients over ice cubes in a highball glass. Stir well and serve. (Vodka may be substituted for gin, if preferred.)",
  },
  {
    name: "Sazerac",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Ricard",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 tsp superfine",
        },
      },
      {
        name: "Peychaud Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside. Stir the remaining ingredients over ice and set it aside. Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass. Add the lemon peel for garnish.",
  },
  {
    name: "Scooter",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients well with cracked ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Scotch Cobbler",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "4 dashes",
        },
      },
      {
        name: "Curacao",
        amount: {
          custom: "4 dashes",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour scotch, brandy, and curacao over ice in an old-fashioned glass. Add the orange slice, top with the mint sprig, and serve.",
  },
  {
    name: "Scotch Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/2 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake scotch, juice of lime, and powdered sugar with ice and strain into a whiskey sour glass. Decorate with 1/2 slice lemon, top with the cherry, and serve.",
  },
  {
    name: "Screwdriver",
    timing: "",
    tastes: ["Fresh", "Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Mix in a highball glass with ice. Garnish and serve.",
  },
  {
    name: "Shanghai Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          custom: "1 oz jamaican",
        },
      },
      {
        name: "Anisette",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Sherry Eggnog",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Sherry",
        amount: {
          custom: "2 oz cream",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake sherry, powdered sugar, and egg with ice and strain into a collins glass. Fill with milk and stir. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Sherry Flip",
    timing: "",
    tastes: ["Creamy", "Boozy"],
    ingredients: [
      {
        name: "Sherry",
        amount: {
          custom: "1 1/2 oz cream",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "1 whole",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Nick and Nora Glass",
    instructions:
      "Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.",
  },
  {
    name: "Sidecar",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Cognac",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cointreau",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass.",
  },
  {
    name: "Sidecar Cocktail",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Singapore Sling",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Cherry Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Pour all ingredients into cocktail shaker filled with ice cubes. Shake well. Strain into highball glass. Garnish with pineapple and cocktail cherry.",
  },
  {
    name: "Sloe Gin Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Sloe Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Sol Y Sombra",
    timing: "",
    tastes: ["Boozy", "Bitter sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Anisette",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Brandy snifter",
    instructions:
      'Shake ingredients with ice, strain into a brandy snifter, and serve. (The English translation of the name of this drink is "Sun and Shade", and after sampling this drink, you\'ll understand why. Thanks, Kirby.)',
  },
  {
    name: "Stone Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake all ingredients with ice, strain into a chilled whiskey sour glass, and serve.",
  },
  {
    name: "Strawberry Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Strawberry Schnapps",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Strawberries",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
  },
  {
    name: "Strawberry Margarita",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Strawberry Schnapps",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Strawberries",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
  },
  {
    name: "Tequila Fizz",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except ginger ale) with ice and strain into a collins glass over ice cubes. Fill with ginger ale, stir, and serve.",
  },
  {
    name: "Tequila Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/2 slice",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Shake tequila, juice of lemon, and powdered sugar with ice and strain into a whiskey sour glass. Add the half-slice of lemon, top with the cherry, and serve.",
  },
  {
    name: "Thriller",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Wine",
        amount: {
          custom: "1 oz green ginger",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Tom Collins",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp superfine",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the gin, lemon juice, and sugar. Shake well. Strain into a collins glass alomst filled with ice cubes. Add the club soda. Stir and garnish with the cherry and the orange slice.",
  },
  {
    name: "Turf Cocktail",
    timing: "",
    tastes: ["Sweet", "Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Anis",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients (except orange peel) with ice and strain into a cocktail glass. Add the twist of orange peel and serve.",
  },
  {
    name: "Tuxedo Cocktail",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Anis",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice and strain into a cocktail glass. Garnish with a cherry and a twist of lemon zest.",
  },
  {
    name: "Valencia Cocktail",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Van Vleet",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Maple Syrup",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
  },
  {
    name: "Vermouth Cassis",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Creme De Cassis",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Stir vermouth and creme de cassis in a highball glass with ice cubes. Fill with carbonated water, stir again, and serve.",
  },
  {
    name: "Vesuvio",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake all ingredients with ice, strain into an old-fashioned glass over ice cubes, and serve.",
  },
  {
    name: "Veteran",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cherry Brandy",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour the rum and cherry brandy into an old-fashioned glass almost filled with ice cubes. Stir well.",
  },
  {
    name: "Victor",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Victory Collins",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Grape Juice",
        amount: {
          custom: "3 oz unsweetened",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 slice",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake all ingredients (except orange slice) with ice and strain into a collins glass over ice cubes. Add the slice of orange and serve.",
  },
  {
    name: "Vodka and Tonic",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour vodka into a highball glass over ice cubes. Fill with tonic water, stir, and serve.",
  },
  {
    name: "Waikiki Beachcomber",
    timing: "",
    tastes: ["Fresh", "Fruity"],
    ingredients: [
      {
        name: "Triple Sec",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Whiskey Mac",
    timing: "",
    tastes: ["Boozy", "Sweet"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Wine",
        amount: {
          custom: "1 oz green ginger",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Pour both of the ingredients into a wine goblet with no ice.",
  },
  {
    name: "White Russian",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Coffee Liqueur",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Light Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
  },
  {
    name: "Afterglow",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Grenadine",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "4 parts",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "4 parts",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Mix. Serve over ice.",
  },
  {
    name: "Alice Cocktail",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Grenadine",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Cream",
        amount: {
          cl: "4",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake well, strain into a large cocktail glass.",
  },
  {
    name: "Apple Karate",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Apple Juice",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Carrot",
        amount: {
          custom: "1 large",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Bora Bora",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Pineapple Juice",
        amount: {
          cl: "10",
        },
      },
      {
        name: "Passion Fruit Juice",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Grenadine",
        amount: {
          cl: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
  },
  {
    name: "Orangeade",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Lemon Juice",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          cl: "15",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          cl: "2-3",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
  },
  {
    name: "Rail Splitter",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Simple Syrup",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale.",
  },
  {
    name: "Banana Milk Shake",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "10 cl cold",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "White wine glass",
    instructions:
      "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
  },
  {
    name: "Banana Strawberry Shake",
    timing: "",
    tastes: ["Creamy", "Fruity", "Sweet"],
    ingredients: [
      {
        name: "Strawberries",
        amount: {
          custom: "1/2 lb frozen",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1 frozen",
        },
      },
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup plain",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "to taste",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Blend all together in a blender until smooth.",
  },
  {
    name: "Banana Strawberry Shake Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Strawberries",
        amount: {
          custom: "1/2 lb frozen",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1 frozen",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          custom: "2 cups fresh",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Cocktail Glass",
    instructions: "Blend all together in a blender until smooth.",
  },
  {
    name: "Egg Cream",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Chocolate Syrup",
        amount: {
          custom: "2 tblsp",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "6 oz whole",
        },
      },
      {
        name: "Soda Water",
        amount: {
          oz: "6",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw.",
  },
  {
    name: "Fruit Cooler",
    timing: "",
    tastes: ["Fresh", "Fruity"],
    ingredients: [
      {
        name: "Apple Juice",
        amount: {
          custom: "1 can frozen",
        },
      },
      {
        name: "Strawberries",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 tblsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Apple",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "1 l",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve.",
  },
  {
    name: "Fruit Flip-flop",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Fruit Juice",
        amount: {
          custom: "1 cup",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Fruit Shake",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup fruit",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "4 oz frozen",
        },
      },
      {
        name: "Fruit",
        amount: {
          custom: "1/2 piece textural",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "6",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Blend til smooth.",
  },
  {
    name: "Just A Moonmint",
    timing: "",
    tastes: ["Fresh", "Herbal"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Chocolate Syrup",
        amount: {
          custom: "",
        },
      },
      {
        name: "Mint Syrup",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Lassi - A South Indian Drink",
    timing: "",
    tastes: ["Creamy", "Tart"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1/2 cup plain",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 1/4 cup cold",
        },
      },
      {
        name: "Cumin Seed",
        amount: {
          custom: "1/2 tsp ground roasted",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "1/4 tsp dried",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold.",
  },
  {
    name: "Lassi Khara",
    timing: "",
    tastes: ["Creamy", "Tart"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 cups cold",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Asafoetida",
        amount: {
          custom: "1 pinch",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
  },
  {
    name: "Lassi Raita",
    timing: "",
    tastes: ["Creamy", "Tart"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "4-6",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead.",
  },
  {
    name: "Lassi - Sweet",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 cups cold",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "4 tblsp",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "pinch",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "2 tblsp",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Put all ingredients into a blender and blend until nice and frothy. Serve chilled.",
  },
  {
    name: "Lassi - Mango",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Mango",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Yoghurt",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 cup iced",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas.",
  },
  {
    name: "Lemouroudji",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Ginger",
        amount: {
          custom: "2 pieces",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 gal",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 lb",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Cayenne Pepper",
        amount: {
          custom: "ground",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve.",
  },
  {
    name: "Limeade",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Lime",
        amount: {
          custom: "juice of 1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "(seltzer water)",
        },
      },
      {
        name: "Lime Peel",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
  },
  {
    name: "Imperial Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Lime Juice",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Gin",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Aperol",
        amount: {
          cl: "4",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake with ice and strain into cocktail glass.",
  },
  {
    name: "Banana Cantaloupe Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Cantaloupe",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
  },
  {
    name: "Apple Berry Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Berries",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Apple",
        amount: {
          custom: "2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Throw everything into a blender and liquify.",
  },
  {
    name: "Grape Lemon Pineapple Smoothie",
    timing: "",
    tastes: ["Fruity", "Tart"],
    ingredients: [
      {
        name: "Grapes",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/4",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions: "Throw everything into a blender and liquify.",
  },
  {
    name: "Kiwi Papaya Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Kiwi",
        amount: {
          custom: "3",
        },
      },
      {
        name: "Papaya",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Throw everything into a blender and liquify.",
  },
  {
    name: "Mango Orange Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Mango",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Throw everything into a blender and liquify.",
  },
  {
    name: "Pineapple Gingerale Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    ingredients: [
      {
        name: "Ginger",
        amount: {
          custom: "1/4 inch",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions: "Throw everything into a blender and liquify.",
  },
  {
    name: "Kill the Cold Smoothie",
    timing: "",
    tastes: ["Fresh"],
    ingredients: [
      {
        name: "Ginger",
        amount: {
          custom: "1 inch",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/4",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 cup hot",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Juice ginger and lemon and add it to hot water. You may add cardomom.",
  },
  {
    name: "Strawberry Shivers",
    timing: "",
    tastes: ["Creamy", "Fruity", "Sweet"],
    ingredients: [
      {
        name: "Strawberries",
        amount: {
          custom: "1 1/2 cup",
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "4 tsp",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2 cup",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Sweet Bananas",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Tomato Tang",
    timing: "",
    tastes: ["Fresh", "Tart"],
    ingredients: [
      {
        name: "Tomato Juice",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1-2 tblsp",
        },
      },
      {
        name: "Celery Salt",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    name: "Yoghurt Cooler",
    timing: "",
    tastes: ["Creamy", "Tart"],
    ingredients: [
      {
        name: "Yoghurt",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Fruit",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed.",
  },
  {
    name: "Castillian Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Cocoa Powder",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Cornstarch",
        amount: {
          custom: "7 tsp",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 qt",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
  },
  {
    name: "Chocolate Beverage",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "6 cups",
        },
      },
      {
        name: "Chocolate",
        amount: {
          custom: "3 oz mexican",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1 tsp powdered",
        },
      },
      {
        name: "Egg",
        amount: {
          custom: "3",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
  },
  {
    name: "Chocolate Drink",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Chocolate",
        amount: {
          custom: "125 gr",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "3/4 l",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
  },
  {
    name: "Drinking Chocolate",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Heavy Cream",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "6-8",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1 stick",
        },
      },
      {
        name: "Vanilla",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Chocolate",
        amount: {
          custom: "2 oz finely chopped dark",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "fresh",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug.",
  },
  {
    name: "Hot Chocolate To Die For",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Chocolate",
        amount: {
          custom: "12 oz fine",
        },
      },
      {
        name: "Butter",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Half-and-half",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Marshmallows",
        amount: {
          custom: "mini",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
  },
  {
    name: "Microwave Hot Cocoa",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "5 tblsp",
        },
      },
      {
        name: "Cocoa Powder",
        amount: {
          custom: "3 tblsp",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "3 tblsp hot",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1/4 tsp",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well.",
  },
  {
    name: "Nuked Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Cocoa Powder",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "12",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts.",
  },
  {
    name: "Orange Scented Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Chocolate",
        amount: {
          custom: "4 oz chopped bittersweet or semi-sweet",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "3 2-inch strips",
        },
      },
      {
        name: "Espresso",
        amount: {
          custom: "1/2 tsp instant",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "1/8 tsp ground",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings.",
  },
  {
    name: "Spanish Chocolate",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Chocolate",
        amount: {
          custom: "2 oz sweet",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Egg Yolk",
        amount: {
          custom: "2 beaten",
        },
      },
    ],
    category: "Cocoa",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug.",
  },
  {
    name: "Lemon Shot",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Galliano",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Absolut Citron",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "wedge",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "bacardi",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Mix Galliano and Absolut Citron in a shot glass, lay lemon wedge sprinkled with sugar over glass and pour a rum over wedge and glass. light rum with a lighter and let burn for a second. Do shot quickly and suck on lemon. If it is done correctly, this will taste like a shot of sweet lemonade.",
  },
  {
    name: "Sex On the Beach",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Build all ingredients in a highball glass filled with ice. Garnish with orange slice.",
  },
  {
    name: "Autodafé",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Mix and fill up with soda water. Drunk by finns on a sunny day any time of the year and day.",
  },
  {
    name: "Gagliardo",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Peach Vodka",
        amount: {
          custom: "5 parts",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Galliano",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Sirup of Roses",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake well and serve in a cocktail glass. This is a home cocktail of American/Internet Bar del Pozzo, Pavia, Italy.",
  },
  {
    name: "Surf City Lifesaver",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Ouzo",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Gin",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          custom: "1/2 part",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Lots of ice and soda top up in tall glass with cherry and a grin.",
  },
  {
    name: "Grizzly Bear",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Jägermeister",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Kahlua",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "2 1/2 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Served over ice. Sounds nasty, but tastes great.",
  },
  {
    name: "Karsk",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Grain Alcohol",
        amount: {
          custom: "2 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Put a copper coin in a coffe-cup and fill up with coffee until you no longer see the coin, then add alcohol until you see the coin. Norwegian speciality.",
  },
  {
    name: "Happy Skipper",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Spiced Rum",
        amount: {
          cl: "1 1/2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      'Pour Captain Morgan\'s Spiced Rum over ice, fill glass to top with Ginger Ale. Garnish with lime. Tastes like a cream soda. Named for the Gilligan\'s Island reference ("The Captain" *in* "Ginger" is a Happy Skipper!)',
  },
  {
    name: "Frappé",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "1/2 cup black",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1-2 tsp",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball Glass",
    instructions:
      "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
  },
  {
    name: "Iced Coffee",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "1/4 cup instant",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/4 cup hot",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "4 cups cold",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug.",
  },
  {
    name: "Iced Coffee Fillip",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "strong cold",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions: "Mix together in a coffee mug and chill before serving.",
  },
  {
    name: "Masala Chai",
    timing: "",
    tastes: ["Spicy"],
    ingredients: [
      {
        name: "Water",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Tea",
        amount: {
          custom: "3-4 tsp",
        },
      },
      {
        name: "Ginger",
        amount: {
          custom: "1 chunk dried",
        },
      },
      {
        name: "Cardamom",
        amount: {
          custom: "3-4 crushed",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "3",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1 piece",
        },
      },
      {
        name: "Black Pepper",
        amount: {
          custom: "1-2 whole",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "to taste",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "to taste",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee Mug",
    instructions:
      "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT.",
  },
  {
    name: "Melya",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Espresso",
        amount: {
          custom: "",
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "unsweetened",
        },
      },
      {
        name: "Cocoa Powder",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.",
  },
  {
    name: "Spiking Coffee",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Coffee mug",
    instructions:
      "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug.",
  },
  {
    name: "Thai Coffee",
    timing: "",
    tastes: ["Spicy", "Sweet"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "6 tblsp ground",
        },
      },
      {
        name: "Coriander",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Cardamom",
        amount: {
          custom: "4-5 whole green",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Whipping Cream",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away.",
  },
  {
    name: "Thai Iced Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "black",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "pods",
        },
      },
      {
        name: "Cardamom",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
  },
  {
    name: "Thai Iced Tea",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Tea",
        amount: {
          custom: "1/4 cup thai",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2 cup boiling",
        },
      },
      {
        name: "Condensed Milk",
        amount: {
          custom: "2 tsp sweetened",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "garnish",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Highball glass",
    instructions:
      "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings.",
  },
  {
    name: "Absinthe #2",
    timing: "",
    tastes: ["Bitter sweet", "Herbal"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "50 gr",
        },
      },
      {
        name: "Anise",
        amount: {
          custom: "50 ml pure",
        },
      },
      {
        name: "Licorice Root",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Wormwood",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Jar",
    instructions:
      "Mix together and let sit a few days. Strain through a coffee filter. To serve mix 1 part absinthe to 4 parts water, add ice, enjoy.",
  },
  {
    name: "Amaretto Liqueur",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "3/4 cup",
        },
      },
      {
        name: "Apricot",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Almond Flavoring",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Grain Alcohol",
        amount: {
          custom: "1/2 cup pure",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "3 drops yellow",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "6 drops red",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "2 drops blue",
        },
      },
      {
        name: "Glycerine",
        amount: {
          custom: "1/2 tsp",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine sugar and 3/4 cup water in a small saucepan. Bring to a boil, stirring constantly. Reduce heat and simmer until all sugar is dissolved. Remove from heat and cool. In an aging container, combine apricot halves, almond extract, grain alcohol with 1/2 cup water, and brandy. Stir in cooled sugar syrup mixture. Cap and let age for 2 days. Remove apricot halves. (Save apricot halves, can be used for cooking). Add food coloring and glycerine. Stir, recap and continue aging for 1 to 2 months. Re-bottle as desired. Liqueur is ready to serve but will continue to improve with additional aging.",
  },
  {
    name: "Angelica Liqueur",
    timing: "",
    tastes: ["Herbal", "Floral"],
    ingredients: [
      {
        name: "Angelica Root",
        amount: {
          custom: "3 tblsp chopped",
        },
      },
      {
        name: "Almond",
        amount: {
          custom: "1 tblsp chopped",
        },
      },
      {
        name: "Allspice",
        amount: {
          custom: "1 cracked",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1 one-inch",
        },
      },
      {
        name: "Anise",
        amount: {
          custom: "3-6 crushed",
        },
      },
      {
        name: "Coriander",
        amount: {
          custom: "1/8 tsp powdered",
        },
      },
      {
        name: "Marjoram Leaves",
        amount: {
          custom: "1 tblsp fresh chopped",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1.5 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 cup granulated",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "1 drop yellow",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "1 drop green",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine all herbs, nuts and spices with vodka in a 1 quart or larger aging container. Cap tightly and shake daily for 2 weeks. Strain through a fine muslin cloth or coffee filter, discarding solids. Clean out aging container. Place liquid back in container. Place sugar and water in saucepan and stir to combine over medium heat. When sugar is completely dissolved, set aside and let cool. When cool combine with food coloring and add to liqueur liquid. Cap and allow to age and mellow in a cool, dark place for one month.",
  },
  {
    name: "Caribbean Orange Liqueur",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Orange",
        amount: {
          custom: "3 large",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "3 cups",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 1/3 cup superfine",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Pare very thinly the bright-colored rind from the oranges (no white). Blot the peel on paper towels to remove any excess oil. Put peel in a 4 cup screw-top jar. Add 2 cups vodka. Close jar. Store in a cool, dark place for 2 days or until the vodka has absorbed the flavor. Remove peel and add remaining vodka. Close jar and add remaining cup of vodka. Close the jar and store in a cool dark place at least 1 month to age.",
  },
  {
    name: "Coffee Liqueur",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "10 tblsp instant",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "4 tblsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 1/2 cups",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 qt",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 1/2 cups",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine coffee, sugar and water. Simmer 1 hour and let cool. Add vanilla and vodka. Age in sealed jar 2 to 3 weeks.",
  },
  {
    name: "Coffee-vodka",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Water",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 cups white",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "1/2 cup instant",
        },
      },
      {
        name: "Vanilla",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 1/2 cup",
        },
      },
      {
        name: "Caramel Coloring",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Boil water and sugar until dissolved. Turn off heat. Slowly add dry instant coffee and continue stirring. Add a chopped vanilla bean to the vodka, then combine the cooled sugar syrup and coffee solution with the vodka. Cover tightly and shake vigorously each day for 3 weeks. Strain and filter. Its also best to let the sugar mixture cool completely so the vodka won't evaporate when its added. If you like a smoother feel to the liqueur you can add about 1 teaspoon of glycerine to the finished product.",
  },
  {
    name: "Cranberry Cordial",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Cranberries",
        amount: {
          custom: "1/2 kg chopped",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "3/4 l",
        },
      },
      {
        name: "Light Rum",
        amount: {
          custom: "1/2 l",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Place the chopped cranberries in a 2 liter jar that has a tight-fitting lid. Add the sugar and rum. Adjust the lid securely and place the jar in a cool, dark place. Invert the jar and shake it every day for six weeks. Strain the cordial into bottles and seal with corks.",
  },
  {
    name: "Creme De Menthe",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "8 cups",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "6 cups",
        },
      },
      {
        name: "Grain Alcohol",
        amount: {
          custom: "1 pint",
        },
      },
      {
        name: "Peppermint Extract",
        amount: {
          custom: "1 oz pure",
        },
      },
      {
        name: "Food Coloring",
        amount: {
          custom: "1 tblsp green",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Bring sugar and water to a boil and simmer for 10 minutes. Cool. Add the remaining ingredients and stir. Cover and let ripen for 1 month.",
  },
  {
    name: "Irish Cream",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Half-and-half",
        amount: {
          custom: "1 1/4 cup",
        },
      },
      {
        name: "Condensed Milk",
        amount: {
          custom: "1 can sweetened",
        },
      },
      {
        name: "Coconut Syrup",
        amount: {
          custom: "3 drops",
        },
      },
      {
        name: "Chocolate Syrup",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Irish coffee cup",
    instructions: "Mix scotch and milk. Add half-and-half. Add rest.",
  },
  {
    name: "Scottish Highland Liqueur",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Johnnie Walker",
        amount: {
          custom: "1 fifth",
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "1 1/2 cup mild",
        },
      },
      {
        name: "Angelica Root",
        amount: {
          custom: "2 tsp dried and chopped",
        },
      },
      {
        name: "Fennel Seeds",
        amount: {
          custom: "1/4 tsp crushed",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "2 2 inch strips",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine all ingreds in aging container. Cover tightly and shake gently several times during the first 24 hrs. After 24 hrs, remove the lemon zest. Cover again and let stand in a cool, dark place for 2 weeks, shaking gently every other day. Strain through a wire sieve to remove the angelica root and fennel. Return to aging container, cover and let stand undisturbed in a cool dark place for 6 months. Siphon or pour clear liqueur into a sterile bottle. The cloudy dregs may be saved for cooking.",
  },
  {
    name: "Tia-maria",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    ingredients: [
      {
        name: "Water",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Brown Sugar",
        amount: {
          custom: "3/4-1 cup",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "4 tsp",
        },
      },
      {
        name: "Rum",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "4 tsp",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Boil water, sugar and coffe for 10 mins and let cool. Add rum and vanilla. Put in clean bottle(s) and leave for 1 week before using.",
  },
  {
    name: "Aloha Fruit Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Water",
        amount: {
          custom: "3/4 cup",
        },
      },
      {
        name: "Ginger",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Guava Juice",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 1/2 tblsp",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "1 1/2 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "3-4 cups",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Collins Glass",
    instructions:
      "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
  },
  {
    name: "Apple Cider Punch",
    timing: "",
    tastes: ["Sweet", "Tart"],
    ingredients: [
      {
        name: "Apple Cider",
        amount: {
          custom: "4 qt",
        },
      },
      {
        name: "Brown Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "6 oz frozen",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "6 oz frozen",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "6 whole",
        },
      },
      {
        name: "Allspice",
        amount: {
          custom: "6 whole",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "1 tsp ground",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "3 sticks",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Collins Glass",
    instructions:
      "If you use the whole all spice and cloves, tie them in cheesecloth. Heat the mixture. Stir occasionally. If you want an alcoholic drink, rum would be nice.",
  },
  {
    name: "Artillery Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Tea",
        amount: {
          custom: "1 quart black",
        },
      },
      {
        name: "Rye Whiskey",
        amount: {
          custom: "1 quart",
        },
      },
      {
        name: "Red Wine",
        amount: {
          custom: "1 fifth",
        },
      },
      {
        name: "Rum",
        amount: {
          custom: "1 pint jamaican",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Benedictine",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 pint",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1/2 pint",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions:
      "Combine all the ingredients in a large punch bowl with a block of ice. If found too dry, sugar syrup may be added. Decorate with twists of lemon peel.",
  },
  {
    name: "Berry Deadly",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Everclear",
        amount: {
          custom: "2 pint",
        },
      },
      {
        name: "Wine",
        amount: {
          custom: "1 bottle boone strawberry hill",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1/2 gal",
        },
      },
      {
        name: "Kool-aid",
        amount: {
          custom: "1 gal tropical berry",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Add all ingredients to large bowl. Stir gently. Serve chilled.",
  },
  {
    name: "Cranberry Punch",
    timing: "",
    tastes: ["Sweet", "Tart"],
    ingredients: [
      {
        name: "Cranberry Juice",
        amount: {
          custom: "4 cups",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 1/2 cup",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "4 cups",
        },
      },
      {
        name: "Almond Flavoring",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "2 qt",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Punch Bowl",
    instructions:
      "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold.",
  },
  {
    name: "Egg Nog #4",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Egg Yolk",
        amount: {
          custom: "6",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Light Rum",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Bourbon",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Whipping Cream",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "6",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "ground",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Punch bowl",
    instructions:
      "In a small mixer bowl beat egg yolks till blended. Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored. Stir in milk, stir in rum, bourbon, vanilla, and salt. Chill thoroughly. Whip cream. Wash beaters well. In a large mixer bowl beat egg whites till soft peaks form. Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites. Serve immediately. Sprinkle nutmeg over each serving. Serve in a punch bowl or another big bowl. NOTE: For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups.",
  },
  {
    name: "Egg-nog - Classic Cooked",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Egg",
        amount: {
          custom: "6",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 qt",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Pitcher",
    instructions:
      "In large saucepan, beat together eggs, sugar and salt, if desired. Stir in 2 cups of the milk. Cook over low heat, stirring constantly, until mixture is thick enough to coat a metal spoon and reaches 160 degrees F. Remove from heat. Stir in remaining 2 cups milk and vanilla. Cover and regfigerate until thoroughly chilled, several hours or overnight. Just before serving, pour into bowl or pitcher. Garnish or add stir-ins, if desired. Choose 1 or several of: Chocolate curls, cinnamon sticks, extracts of flavorings, flavored brandy or liqueur, fruit juice or nectar, ground nutmeg, maraschino cherries, orange slices, peppermint sticks or candy canes, plain brandy, run or whiskey, sherbet or ice-cream, whipping cream, whipped. Serve immediately.",
  },
  {
    name: "Egg Nog - Healthy",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Egg",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "3 tblsp",
        },
      },
      {
        name: "Condensed Milk",
        amount: {
          custom: "13 oz skimmed",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "3/4 cup skimmed",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Rum",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Collins Glass",
    instructions:
      "Whip egg substitute and sugar together, combine with the two kinds of milk, vanilla, and rum. Mix well. Chill over night. Sprinkle with nutmeg. Makes 6 servings.",
  },
  {
    name: "Gluehwein",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "1 l",
        },
      },
      {
        name: "Water",
        amount: {
          ml: "125",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "60 gr",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "3",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Irish coffee cup",
    instructions:
      "Boil sugar and spices in water, leave in the water for 30 minutes. Strain the spiced water and mix with the wine. Heat slowly until short of boiling temperature. (To remove alcohol, let it boil for a while.) You may add lemon or orange juice to taste. Serve in irish coffee cup.",
  },
  {
    name: "Holloween Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Grape Juice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Carbonated Soft Drink",
        amount: {
          custom: ", orange",
        },
      },
      {
        name: "Sherbet",
        amount: {
          custom: "",
        },
      },
      {
        name: "Sherbet",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Punch bowl",
    instructions:
      'Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still "bubbles" in it in the form of sherbet scoops. Looks horrible, tastes just fine.',
  },
  {
    name: "Mulled Wine",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    ingredients: [
      {
        name: "Water",
        amount: {
          custom: "3 cups",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Red Wine",
        amount: {
          ml: "750",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "1/4 cup",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      'Simmer 3 cups water with, sugar, cloves, cinnamon sticks, and lemon peel in a stainless steel pot for 10 minutes. Add wine heat to a "coffee temperature" (DO NOT BOIL) then add the brandy.',
  },
  {
    name: "Sangria",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pitcher",
    instructions:
      "Mix all together in a pitcher and refrigerate. Add cloves and cinnamon sticks to taste. Serve in wine glasses.",
  },
  {
    name: "Sweet Sangria",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "2 bottles",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 cups hot",
        },
      },
      {
        name: "Apple",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "wedges",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "wedges",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "",
        },
      },
      {
        name: "Fresca",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pitcher",
    instructions:
      "Dissolve the sugar in hot water and cool. Peel the citrus fruits and break into wedges. Mix the wine, sugar syrup, fruit, and Fresca in a pitcher and put in the fridge for a few hours. Serve in tall glasses with a straw.",
  },
  {
    name: "Sangria the Best",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "1 1/2 l",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 large",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 large",
        },
      },
      {
        name: "Apple",
        amount: {
          custom: "1 large",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "3-4 oz plain",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pitcher",
    instructions:
      "Mix wine, sugar and fruit, and let sit in the fridge for 18-24 hours. The mixture will have a somewhat syrupy consistency. Before serving stir in brandy and cut the mixture with soda water until it have a thinner, more wine like consistency. Serve from a pitcher in wine glasses.",
  },
  {
    name: "Spiced Peach Punch",
    timing: "",
    tastes: ["Sweet", "Spicy", "Fruity"],
    ingredients: [
      {
        name: "Peach Nectar",
        amount: {
          oz: "46",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "20",
        },
      },
      {
        name: "Brown Sugar",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "3 3-inch",
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "2 tblsp",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs.",
  },
  {
    name: "Strawberry Lemonade",
    timing: "",
    tastes: ["Sweet", "Tart", "Fruity"],
    ingredients: [
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Strawberries",
        amount: {
          custom: "8-10 ripe",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1 cup",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Collins Glass",
    instructions:
      "Throw everything into a blender and mix until fairly smooth. Serve over ice.",
  },
  {
    name: "Sunny Holiday Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Pineapple Juice",
        amount: {
          custom: "46 oz chilled",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "28",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "6 oz frozen",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Berries",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "1 bottle",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Punch bowl",
    instructions: "Combine all ingredients in a punch bowl.",
  },
  {
    name: "Wine Cooler",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "2 oz white or",
        },
      },
      {
        name: "Lemon-lime Soda",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Collins Glass",
    instructions: "Mix wine and soft drink. Pour into glass. Add ice.",
  },
  {
    name: "Wine Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "3",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 cup",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine all of the ingredients and pour over a block of ice.",
  },
  {
    name: "Bruce's Puce",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    ingredients: [
      {
        name: "Grenadine",
        amount: {
          custom: "",
        },
      },
      {
        name: "Kahlua",
        amount: {
          custom: "",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "In a regular-sized shot glass, layer, with a spoon or cherry, the grenadine , the Kahlua , then the Bailey's Irish cream in equal portions. It goes down really smooth ,and you don't even need a chaser. It tastes just like chocolate milk.(Really!)",
  },
  {
    name: "Brave Bull Shooter",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tabasco Sauce",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Pour Tabasco into bottom of shot glass and fill with tequila.",
  },
  {
    name: "Fahrenheit 5000",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Firewater",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Absolut Peppar",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tabasco Sauce",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Cover bottom of shot glass with Tabasco Sauce and then fill with half Firewater and half Absolut Peppar.",
  },
  {
    name: "Popped Cherry",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cherry Liqueur",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Served over ice in a tall glass with a popped cherry (can add more popped cherries if in the mood)!",
  },
  {
    name: "Atomic Lokade",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Lemonade",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "In a shaker, place lemonade, vodka, blue Curacao, and triple sec together. Shake with ice and strain into glass. Add sugar to taste",
  },
  {
    name: "Diesel",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Lager",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Cider",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Blackcurrant Cordial",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions:
      "Pour the lager first then add the blackcurrant cordial. Top up with the cider. The colour sholud be very dark approaching the colour of Guiness.",
  },
  {
    name: "Afternoon",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Frangelico",
        amount: {
          custom: "1 1/2",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "4 cl hot",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Build into a suiting glass, with no ice. Cream on top if wanted. Served directly.",
  },
  {
    name: "Kool-aid Shot",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Sloe Gin",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour into a large glass with ice and stir. Add a little cranberry juice to taste.",
  },
  {
    name: "National Aquarium",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon-lime Soda",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Pour all ingredients into a shaker of ice. Shake well. Serve on the rocks.",
  },
  {
    name: "Damned If You Do",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Whiskey",
        amount: {
          oz: "0.75",
        },
      },
      {
        name: "Hot Damn",
        amount: {
          oz: "0.25",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Pour into shot glass. Put in mouth. Repeat as deemed necessary.",
  },
  {
    name: "Long Vodka",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "4 dashes",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          custom: "1 dl schweppes",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake a tall glass with ice cubes and Angostura, coating the inside of the glass. Por the vodka onto this, add 1 slice of lime and squeeze juice out of remainder, mix with tonic, stir and voila you have a Long Vodka",
  },
  {
    name: "Quick F**k",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "In a shot glass add 1/3 Kahlua first. Then 1/3 Miduri, topping it off with a 1/3 bailey's irish cream",
  },
  {
    name: "Owen's Grandmother's Revenge",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Whiskey",
        amount: {
          oz: "12",
        },
      },
      {
        name: "Beer",
        amount: {
          oz: "12",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "12 oz frozen",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "1 cup crushed",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Add ingredients and mix in blender.",
  },
  {
    name: "Flaming Dr. Pepper",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1 oz bacardi",
        },
      },
      {
        name: "Dr. Pepper",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Beer",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Add Amaretto, Bacardi, and vodka. Mix in the Dr. Pepper and beer",
  },
  {
    name: "New York Lemonade",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "2 oz sweetened",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Serve in a chilled cocktail glass. Lemon and sugar the rim. Stir and Strain.",
  },
  {
    name: "Caipirissima",
    timing: "",
    tastes: ["Boozy", "Sour"],
    ingredients: [
      {
        name: "Lime",
        amount: {
          custom: "2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 tblsp",
        },
      },
      {
        name: "White Rum",
        amount: {
          oz: "2-3",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "crushed",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!",
  },
  {
    name: "Pisco Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    ingredients: [
      {
        name: "Pisco",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1-2 tblsp",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Vigorously shake and strain contents in a cocktail shaker with ice cubes, then pour into glass and garnish with bitters.\r\n",
  },
  {
    name: "Big Red",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Irish Cream",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Goldschlager",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Pour ingredients into 1 ounce shot glass",
  },
  {
    name: "Black & Tan",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Ale",
        amount: {
          custom: "1 part bass pale",
        },
      },
      {
        name: "Guinness Stout",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions:
      "Fill pint glass half full with Bass. Next pour Guiness over a spoon slowly until glass is full. If done correctly the Guiness will stay on top and the Bass on bottom hence the name Black & Tan.",
  },
  {
    name: "Chocolate Milk",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Chocolate Liqueur",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Milk",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot Glass",
    instructions:
      "Put the milk in the bottom, pour the Liquer on top and add the dash of amaretto. Do not mix. SLAM IT!",
  },
  {
    name: "B-53",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          shot: "1/3",
        },
      },
      {
        name: "Sambuca",
        amount: {
          shot: "1/3",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          shot: "1/3",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Layer the Kahlua, Sambucca and Grand Marnier into a shot glas in that order. Better than B-52",
  },
  {
    name: "Sea Breeze",
    timing: "",
    tastes: ["Fresh", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Build all ingredients in a highball glass filled with ice. Garnish with lime wedge.",
  },
  {
    name: "Snake Bite (uk)",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Lager",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Cider",
        amount: {
          custom: "1/2 pint sweet or dry",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions: "Pour ingredients into a pint glass. Drink. Fall over.",
  },
  {
    name: "Bob Marley",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Jägermeister",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Goldschlager",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Layer in a 2 oz shot glass or pony glass",
  },
  {
    name: "Brainteaser",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Sambuca",
        amount: {
          custom: "30 ml white",
        },
      },
      {
        name: "Erin Cream",
        amount: {
          ml: "30",
        },
      },
      {
        name: "Advocaat",
        amount: {
          ml: "5",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot Glass",
    instructions:
      "layered erin first, then sambuca and then avocart(should sit in middle of other two. To drink: use a straw to suck up avocart then shot the rest and then suck fumes up through straw.",
  },
  {
    name: "Atlantic Sun",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "2 cl smirnoff",
        },
      },
      {
        name: "Southern Comfort",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Passion Fruit Syrup",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Club Soda",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Shake all the ingredients, top the drink with soda. Garnish with a slice of orange.",
  },
  {
    name: "Green Goblin",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Cider",
        amount: {
          custom: "1/2 pint hard",
        },
      },
      {
        name: "Lager",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions: "Cider First, Lager then Curacao",
  },
  {
    name: "Oreo Mudslide",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Oreo Cookie",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Blend Vodka, Kahlua, Bailey's, ice-cream and the Oreo well in a blender. Pour into a large frosted glass. Garnish with whipped cream and a cherry.",
  },
  {
    name: "Abc",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          custom: "1/3",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1/3",
        },
      },
      {
        name: "Cognac",
        amount: {
          custom: "1/3",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Layered in a shot glass.",
  },
  {
    name: "Pink Panty Pulldowns",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Sprite",
        amount: {
          custom: "1 l",
        },
      },
      {
        name: "Pink Lemonade",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "2 cups",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Shake well",
  },
  {
    name: "Ice Pick",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Iced Tea",
        amount: {
          oz: "6",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "to taste",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Put Vodka in glass fill with iced tea. Stir in lemon to taste.",
  },
  {
    name: "410 Gone",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Peach Vodka",
        amount: {
          oz: "2-3",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "",
  },
  {
    name: "Tequila Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          custom: "2 measures",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the tequila and orange juice into glass over ice. Add the grenadine, which will sink to the bottom. Stir gently to create the sunrise effect. Garnish and serve.",
  },
  {
    name: "Screaming Orgasm",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour first vodka, then Bailey's, then Kahlua into a cocktail glass over crushed ice. Stir. Caution: use only high quality vodka. Cheap vodka can cause the Bailey's to curdle. Test your brand of vodka by mixing 1 Tsp each of vodka and Bailey's first.",
  },
  {
    name: "Flander's Flake-out",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sambuca",
        amount: {
          custom: "1/4 glass",
        },
      },
      {
        name: "Sarsaparilla",
        amount: {
          custom: "3/4 glass",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Bang 'em both in.",
  },
  {
    name: "Apple Slammer",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "7-up",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Apple Schnapps",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "pour into a shot glass and present to consumer, they are expected to cover the top of the shotglass with thier palm, raise the glass, slam it on the bar and the swallow quickly.",
  },
  {
    name: "Amaretto Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Shake and strain. Garnish with a cherry and an orange slice.",
  },
  {
    name: "Cuba Libra",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          shot: "1-2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "squeeze",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "fill with",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Fill tall glass with ice cubes. Add rum. Rub cut edge of lime on rim of glass then squeeze juice into glass. Fill with Coca-Cola. Garnish with lime slice. Enjoy!",
  },
  {
    name: "Jelly Bean",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Blackberry Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Anis",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cordial glass",
    instructions:
      "mix equal parts in pony glass-tastes just like a jelly bean!",
  },
  {
    name: "After Five",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Peppermint Schnapps",
        amount: {
          custom: "",
        },
      },
      {
        name: "Kahlua",
        amount: {
          custom: "",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "1. Pour Kahlua into shot glass to about 1/2 full. 2. Using a spoon(inverted), slowly pour in the Peppermint Schnapps until glass is about 3/4 full. Done correctly, the Schnapps will flow under the Kahlua for a clear layer. 3. Again using a spoon, but this time right side up, slowly top off the glass with a layer of Bailey's. Be careful to place the spoon right at the top of the Kahlua layer and to raise it as the glass fills up. Done correctly, this will provide a layer of Bailey's floating over the Kahlua. 4. Toss it down all at once for something like a Peppermint Pattie, WITH A BANG!!! NOTE: Best if all ingredients are chilled",
  },
  {
    name: "Midnight Manx",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Goldschlager",
        amount: {
          custom: "dash",
        },
      },
      {
        name: "Heavy Cream",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "2 oz hazlenut",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Fill a mixer with ice and add Baileys, Kahlua, Goldshlager, and cream. Shake for 5 seconds and Strain into a double rocks glass filled with ice. Add chilled coffee Stir and enjoy!",
  },
  {
    name: "Kir Royale",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Creme De Cassis",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "5 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne Flute",
    instructions: "Pour Creme de cassis in glass, gently pour champagne on top",
  },
  {
    name: "Jackhammer",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Jack Daniels",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Serve over ice- Warning,Deadly!",
  },
  {
    name: "Nutty Irishman",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Frangelico",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball Glass",
    instructions: "Serve over ice",
  },
  {
    name: "3 Wise Men",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Jack Daniels",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Johnnie Walker",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Jim Beam",
        amount: {
          oz: "1/3",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "put them them in a glass... and slam it to tha head.",
  },
  {
    name: "Miami Vice",
    timing: "",
    tastes: ["Sweet", "Creamy", "Fruity"],
    ingredients: [
      {
        name: "151 Proof Rum",
        amount: {
          custom: "5 oz bacardi",
        },
      },
      {
        name: "Pina Colada Mix",
        amount: {
          custom: "frozen",
        },
      },
      {
        name: "Daiquiri Mix",
        amount: {
          custom: "frozen",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
  },
  {
    name: "At&t",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Absolut Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          oz: "4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball Glass",
    instructions: "Pour Vodka and Gin over ice, add Tonic and Stir",
  },
  {
    name: "69 Special",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          custom: "2 oz dry",
        },
      },
      {
        name: "7-up",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "0.75",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Pour 2 oz. gin. Add 4 oz. 7-up. Add Lemon Juice for flavor. If you are weak, top up glass with more 7-Up.",
  },
  {
    name: "Irish Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Coffee",
        amount: {
          oz: "8",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Irish coffee cup",
    instructions:
      "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
  },
  {
    name: "57 Chevy With A White License Plate",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Creme De Cacao",
        amount: {
          custom: "1 oz white",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "1. Fill a rocks glass with ice 2.add white creme de cacao and vodka 3.stir",
  },
  {
    name: "Mother's Milk",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Goldschlager",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Butterscotch Schnapps",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Shake over ice, strain. Serves two.",
  },
  {
    name: "Zippy's Revenge",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Kool-aid",
        amount: {
          custom: "4 oz grape",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Mix Kool-Aid to taste then add Rum and ammaretto. shake well to disolve the sugar in the Kool-Aid... serve cold",
  },
  {
    name: "Belgian Blue",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Coconut Liqueur",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Sprite",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Just pour all ingredients in the glass and stir...",
  },
  {
    name: "Red Snapper",
    timing: "",
    tastes: ["Sour", "Spicy"],
    ingredients: [
      {
        name: "Crown Royal",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions: "One shot each, shake n shoot",
  },
  {
    name: "Jamaica Kiss",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Coffee Liqueur",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Light Rum",
        amount: {
          custom: "1 shot jamaican",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Fill a tumbler with ice cubes. Add a shot of Tia Maria and a shot of Jamaican light rum. Fill the tumbler with milk. Blend until smooth and serve immediately.",
  },
  {
    name: "Absolut Summertime",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Sprite",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Soda Water",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 slice",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Add all ingredients except lemon to shaker filled with ice. Cover and shake vigorously. Strain contents into ice filled collins glass. Garnish with lemon.",
  },
  {
    name: "Cosmopolitan Martini",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Cointreau",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail Glass",
    instructions:
      "Pour all ingredients in mixing glass half filled with ice, shake and strain into chilled Martini glass.",
  },
  {
    name: "Ziemes Martini Apfelsaft",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vermouth",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          cl: "16",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Serve without ice. At least the juice shold have room temperature.",
  },
  {
    name: "Vodka Martini",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Olive",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake the vodka and vermouth together with a number of ice cubes, strain into a cocktail glass, add the olive and serve.",
  },
  {
    name: "Cafe Savoy",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Brandy",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions:
      "Fill mug almost to top with coffee.Add milk, triple sec and brandy. Stir.",
  },
  {
    name: "Snowball",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Advocaat",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "8-10 oz cold",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Place one ice cube in the glass and add 1 1/2 oz of Advocaat. Fill up the glass with lemonade and decorate with a slice of lemon. Serve at once.",
  },
  {
    name: "Mocha-berry",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          oz: "6",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cocoa Powder",
        amount: {
          custom: "2 tblsp",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Irish coffee cup",
    instructions:
      "pour 6 oz. of coffee in a mug or Irish coffee cup. add coca mix and chambord, mix well and top off with whipped cream.",
  },
  {
    name: "747",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Frangelico",
        amount: {
          custom: "1/3 part",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "pour kaluha, then Baileys, then Frangelico not chilled and not layered -- SERVE!!!",
  },
  {
    name: "Addison Special",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Combine ingredients in the order listed into a shaker. Fill half full with ice and shake well. Strain into glass with ice and garnish with a cherry and orange wedge.",
  },
  {
    name: "California Root Beer",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Galliano",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Put Kahlua and Galliano in highball glass fill with soda",
  },
  {
    name: "Amaretto Stone Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Shake and Serve over ice",
  },
  {
    name: "Blind Russian",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Godiva Liqueur",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Butterscotch Schnapps",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "to fill",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Fill glass with ice. Add all liquers. Add milk. shake.",
  },
  {
    name: "Absolut Sex",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Absolut Kurant",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sprite",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake Absolut Kurant, Midori, and Cranberry juice in shaker with ice: Strain into rocks glass: Splash of seven on top.Absolut Sex.",
  },
  {
    name: "Aztec Punch",
    timing: "",
    tastes: ["Sweet", "Spicy", "Fruity"],
    ingredients: [
      {
        name: "Lemonade",
        amount: {
          custom: "1 can",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Rum",
        amount: {
          oz: "7",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "about 1 bottle",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions:
      "Mix all ingredients in a pitcher. Mix thoroughly and pour into whatever is available, the bigger the better! This drink packs a big punch, so don't over do it.",
  },
  {
    name: "Lemon Drop",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1 1/2",
        },
      },
      {
        name: "Cointreau",
        amount: {
          shot: "1 1/2",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1 wedge",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake and strain into a chilled cocktail glass rimmed with sugar.",
  },
  {
    name: "Absolut Limousine",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          custom: "2/3",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1/3",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "fill with",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          custom: "top it up with",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Fill Absolut into a glass. Add Lime juice. Add Ice and lime wedges.",
  },
  {
    name: "Absolut Evergreen",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          custom: "2/3 part",
        },
      },
      {
        name: "Pisang Ambon",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Bitter Lemon",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix, pour over ice and top up with Bitter Lemon.",
  },
  {
    name: "Lunch Box",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Beer",
        amount: {
          custom: "3/4 bottle",
        },
      },
      {
        name: "Amaretto",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions:
      "Fill a pint glass almost full with beer. Then fill the rest with orange juice (careful not to fill it to the top). Then take the shot of Amaretto and drop it in.",
  },
  {
    name: "Kool-aid Slammer",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Kool-aid",
        amount: {
          custom: "1/2 oz grape",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Fill half the shot glass with the kool-aid first. Then put a paper towel over the top of the glass and slowly pour in the vodka. If you do it right, you should be able to see that the two liquids are separated, with the vodka on top. Now slam it! The last thing you'll taste is the kool-aid.",
  },
  {
    name: "Kurant Tea",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    ingredients: [
      {
        name: "Absolut Kurant",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Tea",
        amount: {
          custom: "turkish apple",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "(if needed)",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Pour Absolut Kurant into a comfortably big tea-cup. Add the not too hot(!) apple tea and, if you like, some sugar. Enjoy!",
  },
  {
    name: "Dirty Nipple",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          custom: "",
        },
      },
      {
        name: "Sambuca",
        amount: {
          custom: "",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "This is a layered shot - the Bailey's must be on top",
  },
  {
    name: "Darkwood Sling",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    ingredients: [
      {
        name: "Cherry Heering",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "There are many good cherry liqueurs you can use, but I prefere Heering. Add one share of the liqueur. Then you add one share of Soda. For a sour sling use Tonic (most people prefer the drink without Tonic). Afterwards you fill the glass with Orange Juice and ice cubes.",
  },
  {
    name: "Bailey's Dream Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Blend ingredients for 30 seconds. Definitely refreshing for a hot summer's day !",
  },
  {
    name: "Bumble Bee",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Kahlua",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Sambuca",
        amount: {
          oz: "1/3",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "This is a layered shot. First pour the Bailey's into the shot glass. Then take an upside down spoon and touch it to the inside wall of the glass. Carefully add the Kahlua. Repeat this process for the Sambuca. If done properly, the alcohol will stay separated and resemble a bumble bee. Enjoy!!!",
  },
  {
    name: "A.d.m. (after Dinner Mint)",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "White Creme De Menthe",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Southern Comfort",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Hot Chocolate",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Irish coffee cup",
    instructions: "shake vigorously",
  },
  {
    name: "A Splash of Nash",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Cranberry Juice",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Soda Water",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "0.5",
        },
      },
      {
        name: "Creme De Banane",
        amount: {
          oz: "0.5",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Drop shot glass with banana & melon liquers into a 9 oz hi- ball glass containing soda water and cranberry juice. Drink in one shot.",
  },
  {
    name: "Amaretto Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Grenadine",
        amount: {
          cl: "1/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Mix together the amaretto and orange juice. Pour into glass and then add the grenadine untill you see the sunrise.",
  },
  {
    name: "Arizona Stingers",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Absolut Vodka",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Iced Tea",
        amount: {
          custom: "12 oz lemon",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Place ice cubes in the hurricane glass . Add the 2 HEAPING shots of Absolute Vodka (Note: You can add as many shots of Absolute as you want!) Fill the rest of glass with the Arizona Icetea with lemon. Stir to mix using a spoon. Drink up and enjoy!!!!!!!",
  },
  {
    name: "Orange Push-up",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Spiced Rum",
        amount: {
          oz: "1.5",
        },
      },
      {
        name: "Grenadine",
        amount: {
          oz: "0.5",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Combine liquors in a blender. Add a half scoop of ice and blend. Garnish with an orange and cherry flag. So good it will melt in your mouth!!!",
  },
  {
    name: "151 Florida Bushwacker",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Malibu Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1/2 oz bacardi",
        },
      },
      {
        name: "Dark Creme De Cacao",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Cointreau",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Coconut Liqueur",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "1 cup",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions:
      "Combine all ingredients. Blend until smooth. Garnish with chocolate shavings if desired.",
  },
  {
    name: "Zizi Coin-coin",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Cointreau",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "or lime",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Margarita/Coupette glass",
    instructions:
      "Pour 5cl of Cointreau on ice, add 2cl of fresh lemon (or lime) juice, stir gently, and finally add slices of lemon/lime in glass.",
  },
  {
    name: "50/50",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Vanilla Vodka",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          custom: "1 splash",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "fill glass with crushed ice. Add vodka. Add a splash of grand-marnier. Fill with o.j.",
  },
  {
    name: "Tequila Surprise",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          custom: "full glass",
        },
      },
      {
        name: "Tabasco Sauce",
        amount: {
          custom: "about 8 drops",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Fill shot glass with Tequila. Add drops of Tobasco sauce.",
  },
  {
    name: "Cream Soda",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Spiced Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour 1oz of Spiced Rum into a highball glass with ice. Fill with Ginger Ale.",
  },
  {
    name: "Acid",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1 oz bacardi",
        },
      },
      {
        name: "Wild Turkey",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Poor in the 151 first followed by the 101 served with a Coke or Dr Pepper chaser.",
  },
  {
    name: "Arctic Fish",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Grape Soda",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "lots",
        },
      },
      {
        name: "Candy",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer pilsner",
    instructions:
      "Fill glass with ice and fish, add vodka, grape soda and orange juice. DO NOT STIR!!!!! Serve well chilled.",
  },
  {
    name: "Grim Reaper",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1 oz bacardi",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Mix Kahlua and 151 in glass. Quickly add ice and pour grenadine over ice to give ice red tint.",
  },
  {
    name: "Freddy Kruger",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Jägermeister",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sambuca",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "make it an ample size shot!!",
  },
  {
    name: "Bubble Gum",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "1/4",
        },
      },
      {
        name: "Banana Liqueur",
        amount: {
          custom: "1/4",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1/4",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          custom: "1/4",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Layer in order into a shot glass.",
  },
  {
    name: "Kiwi Lemon",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Kiwi Liqueur",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Bitter Lemon",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Mix in highball glass. Stirr. Garnish with slice of kiwi.",
  },
  {
    name: "Hot Creamy Bush",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          shot: "3/4",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "6 oz hot",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Irish coffee cup",
    instructions: "Combine all ingredients in glass",
  },
  {
    name: "Midnight Mint",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1",
        },
      },
      {
        name: "White Creme De Menthe",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "3/4 oz double",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "If available, rim cocktail (Martini) glass with sugar syrup then dip into chocolate flakes or powder. Add ingredients into shaker with ice. Shake well then strain into cocktail glass.",
  },
  {
    name: "Talos Coffee",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Grand Marnier",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Brandy snifter",
    instructions: "Add your GM and then add your coffee.",
  },
  {
    name: "Zinger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Peachtree Schnapps",
        amount: {
          shot: "4",
        },
      },
      {
        name: "Surge",
        amount: {
          shot: "4",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Get a shot glass and pour in three shots of the schnapps. Do the same with the Surge Cola. Then down it like Scheetz would.",
  },
  {
    name: "Jello Shots",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "2 cups",
        },
      },
      {
        name: "Jello",
        amount: {
          custom: "3 packages",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "3 cups",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Boil 3 cups of water then add jello. Mix jello and water until jello is completely disolved. Add the two cups of vodka and mix together. Pour mixture into plastic shot glasses and chill until firm. Then, eat away...",
  },
  {
    name: "Rum Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "mikey bottle",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "large bottle",
        },
      },
      {
        name: "Fruit Punch",
        amount: {
          custom: "355 ml frozen",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "355 ml frozen",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "crushed",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions: "Mix all ingredients in a punch bowl and serve.",
  },
  {
    name: "Turkeyball",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Wild Turkey",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Shake with ice and strain into a shot glass.",
  },
  {
    name: "Absolutely Cranberry Smash",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Absolut Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "add",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Stir ingredients together. Serve over ice.",
  },
  {
    name: "Kiss Me Quick",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Cranberry Vodka",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Apfelkorn",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Schweppes Russchian",
        amount: {
          cl: "7",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          cl: "8",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "mix in the glass",
  },
  {
    name: "Royal Flush",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Crown Royal",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour all the ingredients into tumbler over ice. Strain into glass.",
  },
  {
    name: "Limona Corona",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Corona",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Bacardi Limon",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer Glass",
    instructions:
      "Open the Corona. Fill the empty space in the neck in the bottle with the rum. The bottle should be filled to the top. Plug the bottle with your thumb or the palm of your hand. Turn the bottle upside-down so the rum and beer mix. Turn the bottle rightside-up, unplug, and drink.",
  },
  {
    name: "Pysch Vitamin Light",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Orange Juice",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Collins Glass",
    instructions: "Shake with ice.",
  },
  {
    name: "Apello",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Orange Juice",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          cl: "3",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Collins Glass",
    instructions: "Stirr. Grnish with maraschino cherry.",
  },
  {
    name: "Texas Rattlesnake",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Yukon Jack",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Cherry Brandy",
        amount: {
          custom: "1/2 part",
        },
      },
      {
        name: "Southern Comfort",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          custom: "1 splash",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Mix all ingredients and Shake well. Sweet at first, with a BITE at the end...",
  },
  {
    name: "After Sex",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Creme De Banane",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the vodka and creme over some ice cubes in a tall glass and fill up with juice. to make it beuty full make the top of the glass with a grenadine and sugar",
  },
  {
    name: "San Francisco",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Creme De Banane",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      'Take a tall glass and put in a few ice cubes, fill the vodka over it and fill with juice then the "creme", to end fill in the grenadine but very carefully at the side of the glass so it will lay down in the bottom. garnish with orange and strawberry.',
  },
  {
    name: "Amaretto Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Chocolate Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Combine all ingredients in a blender and blend at high speed until smooth. Serve in chilled glass garnished with bittersweet chocolate shavings.",
  },
  {
    name: "A Day At the Beach",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Coconut Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Grenadine",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake Rum, Amaretto, and Orange Juice in a shaker filled with ice. Strain over ice into a highball glass. Add Grenadine and garnish with a Pineapple Wedge and a Strawberry.",
  },
  {
    name: "Malibu Twister",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Malibu Rum",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Tropicana",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Add rum & trister then, add cranberry jucie,stir",
  },
  {
    name: "Space Odyssey",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1 shot bacardi",
        },
      },
      {
        name: "Malibu Rum",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Fill glass with ice and add shots of Bacardi and Malibu. Add splash of pineapple juice and top with orange juice. Add grenadine for color and garnish with cherries.",
  },
  {
    name: "Zenmeister",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Jägermeister",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Root Beer",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix together and enjoy",
  },
  {
    name: "Avalon",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Pisang Ambon",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Apple Juice",
        amount: {
          custom: "6 parts",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 1/2 part",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
  },
  {
    name: "252",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1/2 shot bacardi",
        },
      },
      {
        name: "Wild Turkey",
        amount: {
          shot: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Add both ingredients to shot glass, shoot, and get drunk quick",
  },
  {
    name: "3-mile Long Island Iced Tea",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Cola",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          custom: "1-2 dash",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "1 wedge",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "garnish with",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Fill 14oz glass with ice and alcohol. Fill 2/3 glass with cola and remainder with sweet & sour. Top with dash of bitters and lemon wedge.",
  },
  {
    name: "Zorro",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sambuca",
        amount: {
          cl: "2",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          cl: "2",
        },
      },
      {
        name: "White Creme De Menthe",
        amount: {
          cl: "2",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee Mug",
    instructions: "add all and pour black coffee and add whipped cream on top.",
  },
  {
    name: "Orange Crush",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Add all ingredients to tumbler-Pour as shot",
  },
  {
    name: "155 Belmont",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Light Rum",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "White wine glass",
    instructions: "Blend with ice. Serve in a wine glass. Garnish with carrot.",
  },
  {
    name: "Vodka Russian",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Schweppes Russchian",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix it as a ordinary drink .",
  },
  {
    name: "Danbooka",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Everclear",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee Mug",
    instructions: "pour it in and mix it.",
  },
  {
    name: "110 In the Shade",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Lager",
        amount: {
          oz: "16",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1.5",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer Glass",
    instructions: "Drop shooter in glass. Fill with beer",
  },
  {
    name: "Grand Blue",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Malibu Rum",
        amount: {
          cl: "1 1/2",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          cl: "1 1/2",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          cl: "1 1/2",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          cl: "3",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions: "Serve in an old fashioned glass.",
  },
  {
    name: "Baby Eskimo",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Milk",
        amount: {
          oz: "8",
        },
      },
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Leave ice-cream out for about 10 minutes. Add ingredients in order, stir with chopstick (butter knife or spoon works too). Consume immediately and often. Nice and light, great for following a heavy drink.",
  },
  {
    name: "Tennesee Mud",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          oz: "8",
        },
      },
      {
        name: "Jack Daniels",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee Mug",
    instructions: "Mix Coffee, Jack Daniels and Amaretto. Add Cream on top.",
  },
  {
    name: "Swedish Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Aquavit",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "by taste",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee Mug",
    instructions:
      "Pour the coffee in an ordinary coffee cup. Add the aquavit. Add sugar by taste. Stir and have a nice evening (morning)",
  },
  {
    name: "Adam Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "1/2 can",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "10 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Fill blender up with ice. Fill half with Bartons Vodka. Put 10 tsp of sugar, add 1/2 can lemonade concentrate, fill to top with water. Blend for 60 seconds.",
  },
  {
    name: "Absolut Stress #2",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Absolut Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Coconut Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix well. Garnish with Orange and Cherry. Enjoy",
  },
  {
    name: "Chocolate Monkey",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Banana Liqueur",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Chocolate Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Chocolate Syrup",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Chocolate Milk",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1 piece",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Parfait glass",
    instructions:
      "blend liqeuors with ice-cream, milk and syrup. pour into parfait glass, top with whipped cream and garnish with banana and cherry.",
  },
  {
    name: "Texas Sling",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Irish Cream",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1/2 oz bacardi",
        },
      },
      {
        name: "Cream",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Wine Glass",
    instructions:
      "Blend with Ice until smooth. Serve in a tulip glass, top with whip cream.",
  },
  {
    name: "A Midsummernight Dream",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Kirschwasser",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Strawberry Liqueur",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Strawberries",
        amount: {
          custom: "5",
        },
      },
      {
        name: "Schweppes Russchian",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Mix the strawberrys in a blender Pour it together with the vodka,kirch and strawberry liquer over ice in a shaker. Shake well and pour in a highballglass. Fill up with the Russchian water",
  },
  {
    name: "Zoksel",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Beer",
        amount: {
          custom: "",
        },
      },
      {
        name: "Root Beer",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemonade",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "slice",
        },
      },
      {
        name: "7-up",
        amount: {
          custom: "",
        },
      },
      {
        name: "Creme De Cassis",
        amount: {
          custom: "",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer pilsner",
    instructions:
      "No specific mixinginstructions, just poor every ingredient in one glass. The lemon goes with it.",
  },
  {
    name: "Fuzzy Asshole",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Coffee",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions:
      "fill coffe mug half full of coffee. Fill the other half full of Peach Schnapps. Stir and drink while hot.",
  },
  {
    name: "Quick-sand",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Black Sambuca",
        amount: {
          ml: "25",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          ml: "add 250",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Simply add the orange juice, quite a quick pour in order to mix the sambucca with the orange juice. The juice MUST have fruit pulp!",
  },
  {
    name: "Snakebite and Black",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Lager",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Cider",
        amount: {
          custom: "1/2 pint",
        },
      },
      {
        name: "Blackcurrant Squash",
        amount: {
          custom: "a little bit of",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions:
      "Put blackcurrant squash in first up to about 1cm in glass. Then add the lager and cider one after another.",
  },
  {
    name: "Zimadori Zinger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "1.5",
        },
      },
      {
        name: "Zima",
        amount: {
          oz: "12",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour Zima in a collins glass over ice and then pour the shot of Midori. Don't stir. Garnish with a cherry.",
  },
  {
    name: "Herbal Flame",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Hot Damn",
        amount: {
          shot: "5",
        },
      },
      {
        name: "Tea",
        amount: {
          custom: "very sweet",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Mason jar",
    instructions:
      "Pour Hot Damn 100 in bottom of a jar or regular glass. Fill the rest of the glass with sweet tea. Stir with spoon, straw, or better yet a cinnamon stick and leave it in.",
  },
  {
    name: "Jamaican Coffee",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "1/6 glass",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "1/6 glass strong black",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "1/2 glass cold",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Stir the rum, coffee and water together. Top with the whipped cream. Sprinkle with a pinch of well ground coffee and drink with a straw.",
  },
  {
    name: "Mojito Extra",
    timing: "",
    tastes: ["Sweet", "Sour", "Herbal"],
    ingredients: [
      {
        name: "Mint",
        amount: {
          custom: "1/2 handful",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "3",
        },
      },
      {
        name: "Dark Rum",
        amount: {
          custom: "1/8 l jamaican",
        },
      },
      {
        name: "Club Soda",
        amount: {
          custom: "1/8 l",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "8 drops",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Put mint with lemon juice in a glas, mash the mint with a spoon, ice, rum & fill up with club soda. Top it with Angostura.",
  },
  {
    name: "Apricot Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Apricot Brandy",
        amount: {
          custom: "1 qt",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "4 fifth",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 fifth",
        },
      },
      {
        name: "7-up",
        amount: {
          custom: "4 l",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1/2 gal",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions:
      "Pour all ingrediants into a large punch bowl. Add ice and 4 oranges that are peeled and divided.",
  },
  {
    name: "B-52",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "1/3",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          custom: "1/3",
        },
      },
      {
        name: "Kahlua",
        amount: {
          custom: "1/4",
        },
      },
    ],
    category: "Shot",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Layer ingredients into a shot glass. Serve with a stirrer.",
  },
  {
    name: "Zambeer",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Sambuca",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Root Beer",
        amount: {
          oz: "add 10",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix sambuca with rootbeer and stir. Add ice",
  },
  {
    name: "Americano",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Campari",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          custom: "1 oz red",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "twist of",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour the Campari and vermouth over ice into glass, add a splash of soda water and garnish with half orange slice.",
  },
  {
    name: "Black Forest Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Chocolate Syrup",
        amount: {
          custom: "",
        },
      },
      {
        name: "Cherry Brandy",
        amount: {
          custom: "",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "In a blender put ice cubes, chocolate syrup, cherry brandy, vodka, and milk. Blend very well.",
  },
  {
    name: "Gg",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Galliano",
        amount: {
          shot: "2 1/2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Optional alcohol",
    glass: "Collins Glass",
    instructions:
      "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.",
  },
  {
    name: "Radler",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Beer",
        amount: {
          oz: "12",
        },
      },
      {
        name: "7-up",
        amount: {
          oz: "12",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Pour beer into large mug, slowly add the 7-up (or Sprite).",
  },
  {
    name: "Mudslinger",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Southern Comfort",
        amount: {
          ml: "750",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 l",
        },
      },
      {
        name: "Cola",
        amount: {
          ml: "750",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions: "Add all contents to a large jug or punch bowl. Stir well!",
  },
  {
    name: "Campari Beer",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Lager",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Campari",
        amount: {
          cl: "1 1/2",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions: "Use a 15 oz glass. Add Campari first. Fill with beer.",
  },
  {
    name: "Almond Chocolate Coffee",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Dark Creme De Cacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Coffee",
        amount: {
          oz: "8",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions:
      "Pour in order into coffee cup. Top with whipped creme and chocolate shcvings.",
  },
  {
    name: "Amaretto Stone Sour Alternative",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Sour Mix",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "add splash",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Shake sour mix, tequila and amaretto with ice. Strain into highball glass. Add a splash of OJ. Garnish with orange slice and a cherry.",
  },
  {
    name: "9 1/2 Weeks",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Orange Curacao",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Strawberry Liqueur",
        amount: {
          custom: "1 splash",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.",
  },
  {
    name: "Absolutly Screwed Up",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Absolut Citron",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "fill to top",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Shake it up it tasts better that way, but you can stir it if you want. 6 of those and you will be wasted for the rest of the night.",
  },
  {
    name: "Whitecap Margarita",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Ice",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cream of Coconut",
        amount: {
          custom: "1/4 cup",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "3 tblsp fresh",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Margarita/Coupette glass",
    instructions:
      "Place all ingredients in a blender and blend until smooth. This makes one drink.",
  },
  {
    name: "Bellini Martini",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Ice",
        amount: {
          custom: "8 cubes",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Peach Nectar",
        amount: {
          oz: "1.5",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "1.5",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add ice cubes to shaker.\r\nAdd vodka.\r\nAdd peach schnapps.\r\nAdd peach nectar.\r\nShake.\r\nStrain into glass.\r\nAdd lemon twist peel.",
  },
  {
    name: "Jitterbug",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          custom: "2 jiggers",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 jigger",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "3 dashes",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "around rim put 1 pinch",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "3 dashes",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "fill to top with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail Glass",
    instructions:
      "Wet glass, dip rim in sugar. Then add Ice. Then add everything else. It's that simple!",
  },
  {
    name: "Moranguito",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Absinthe",
        amount: {
          custom: "2/5",
        },
      },
      {
        name: "Tequila",
        amount: {
          custom: "2/5",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/5",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "first you put rhe absinthe, then put tequila, then put the Granadine syrup.",
  },
  {
    name: "Amaretto Sweet & Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          custom: "",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          custom: "",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          custom: "",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Margarita/Coupette glass",
    instructions:
      'Fill the blender with 3/4 ice. Add sweet & sour mix to the top of the ice. Add about 1" of pineapple juice, 1/2" of melon liqeur, and 1/2 to 1/4" of amaretto. Then blend the mix until it is of margaritta consistency or thinner.',
  },
  {
    name: "Rum Runner",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Malibu Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Blackberry Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "3-4",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "3-4",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "3-4",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Mix all ingredients in glass & add ice.",
  },
  {
    name: "H.d.",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Whiskey",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          cl: "8",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions:
      "Mix the whisky and Baileys Cream in a beer-glass (at least 50 cl). Fill the rest of the glass with coffee.",
  },
  {
    name: "The Evil Blue Thing",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Creme De Cacao",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      'Pour ingredients into glass, and drop in a blue whale! The blue whale isn\'t really necessary, but it makes the drink more "fun".',
  },
  {
    name: "Shark Attack",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Lemonade",
        amount: {
          custom: "1 can",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "3 cans",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 1/2 cup",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pitcher",
    instructions:
      "Mix lemonade and water according to instructions on back of can. If the instructions say to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). Mix well. Pour into glass of crushed ice. Excellent!",
  },
  {
    name: "Jack's Vanilla Coke",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Ice",
        amount: {
          custom: "4-5",
        },
      },
      {
        name: "Tennessee Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Cola",
        amount: {
          oz: "10-12",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "After pouring in your ingredients, and adding 3-5 ice cubes, according to taste. Stir the drink with a stirrer to get the Vanilla off the bottom.",
  },
  {
    name: "Apple Grande",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Apple Cider",
        amount: {
          oz: "12",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch Bowl",
    instructions: "Chill both ingredients!! Mix in a tumbler and enjoy!",
  },
  {
    name: "Bleeding Surgeon",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Surge",
        amount: {
          custom: "1/2 glass",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "1/2 glass",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Pour Shot of Rum over slice of orange. Fill the remaining space in glass half way full of surge or similar drink. Finish off glass with cranberry juice. Be carefull, warm surge may foam over the glass.",
  },
  {
    name: "Applejack",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Jack Daniels",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add all ingredients into mixing glass, chill and strain into cocktail glass",
  },
  {
    name: "Adam Bomb",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Tequila",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1/2 part",
        },
      },
      {
        name: "Fruit",
        amount: {
          custom: "",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1-3 pint",
        },
      },
      {
        name: "Fruit Juice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Margarita/Coupette glass",
    instructions:
      "Add ice to blender (or to glass if prefer on the rocks) then fruit, and fruite juice depending on personal prefference then add the Rum, Vodka, Tequila, and triple sec. blend till smooth, rim glass with sugar or salt and pour mixture in. garnish with lemon or lime slice.",
  },
  {
    name: "Arizona Antifreeze",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "1/3",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Pour all ingredients into shot glass and slam !!!!",
  },
  {
    name: "Black and Brown",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Guinness Stout",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Root Beer",
        amount: {
          custom: "1/2",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer pilsner",
    instructions:
      "CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",
  },
  {
    name: "A Piece of Ass",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Southern Comfort",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Put ice in glass. Pour in shots. Fill with Sour Mix.",
  },
  {
    name: "Avalanche",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Crown Royal",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Kahlua",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Mix in highball glass over ice, shake well.",
  },
  {
    name: "Brandon and Will's Coke Float",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "1 can",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions:
      "Scoop two large scoops of vanilla ice-cream into frosted beer mug. Next, add 2 ounces Maker's Mark. Then, pour in coke. Gently stir and enjoy.",
  },
  {
    name: "Flaming Lamborghini",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sambuca",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour the Sambuca and Kahlua into the Cocktail Glass and give the drinker a straw. Pour the Baileys and Blue Curacao into two sepsrate shot glasses either side of the cocktail glass. Set light the concotion in the cocktail glass and start to drink through the straw (this drink should be drunk in one) , as the bottom of the glass is reached put out the fire by pouring the Baileys and Blue Curacao into the cocktail glass and keep drinking till it's all gone!!",
  },
  {
    name: "Zipperhead",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Fill glass with rocks, add straw before putting in liquor. Then add the ingredients in order, trying to keep layered as much as possible (i.e. Chambord on bottom, then Vodka, Then soda on top).",
  },
  {
    name: "A Gilligan's Island",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Shaken, not stirred!",
  },
  {
    name: "Kioki Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Coffee / Tea",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coffee mug",
    instructions: "Stir. Add whipped cream to the top.",
  },
  {
    name: "Apple Pie With A Crust",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Apple Juice",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Malibu Rum",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: "3 dashes",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Just mix the two liquids and sprinkle in the cinnamon. Serve either cold or heated.",
  },
  {
    name: "Zorbatini",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          custom: "1 1/4 oz stoli",
        },
      },
      {
        name: "Ouzo",
        amount: {
          oz: "1/4",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Prepare like a Martini. Garnish with a green olive.",
  },
  {
    name: "Vodka Fizz",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Half-and-half",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Limeade",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Nutmeg",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "White wine glass",
    instructions:
      "Blend all ingredients, save nutmeg. Pour into large white wine glass and sprinkle nutmeg on top.",
  },
  {
    name: "Radioactive Long Island Iced Tea",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Midori Melon Liqueur",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Malibu Rum",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Pour all ingredients over ice in a very tall glass. Sip cautiously.",
  },
  {
    name: "Shot-gun",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Jim Beam",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Jack Daniels",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Wild Turkey",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Pour one part Jack Daneils and one part Jim Beam into shot glass then float Wild Turkey on top.",
  },
  {
    name: "Bible Belt",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Southern Comfort",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "2 wedges",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions: "Mix all ingredients, and pour over ice.",
  },
  {
    name: "Irish Curdling Cow",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "2-3",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour Irish Cream, Vodka, and Bourbon in a glass. Add some ice and mix in the orange juice.",
  },
  {
    name: "Sweet Tooth",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Godiva Liqueur",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball Glass",
    instructions:
      "Put 2 shots Godiva Liquour into a glass, add as much or as little milk as you would like.",
  },
  {
    name: "Downshift",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Fruit Punch",
        amount: {
          custom: "2 part",
        },
      },
      {
        name: "Sprite",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Tequila",
        amount: {
          shot: "2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "float bacardi",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Start with the Sprite. Next comes the tequila. After that, add the Minute Maid Fruit Punch, then float the 151. Rocks optional.",
  },
  {
    name: "Pink Penocha",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Everclear",
        amount: {
          ml: "750",
        },
      },
      {
        name: "Vodka",
        amount: {
          ml: "1750",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          ml: "1750",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 gal",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "1 gal",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions: "mix all ingredients into bowl keep iced stir frequently",
  },
  {
    name: "Orange Whip",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Orange Juice",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "1 package",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "over",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Pour ingredients over ice and stir.",
  },
  {
    name: "Bruised Heart",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Peachtree Schnapps",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Pour all ingredients in a mixing tin over ice, stir, and strain into shot glass",
  },
  {
    name: "Gideon's Green Dinosaur",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Melon Liqueur",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Mountain Dew",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Add all ingredients in collins glass with ice and stir.",
  },
  {
    name: "A True Amaretto Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          custom: "1 jigger",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      'Rub the rim of an old fashioned glass with lemon, and dip repeatedly into granulated sugar until it has a good "frosted" rim. Shake a jigger of Amaretto with the juice of 1/2 a lemon. Strain into glass and add ice. Garnish with a Marachino Cherry.',
  },
  {
    name: "Kool First Aid",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "151 Proof Rum",
        amount: {
          custom: "2 oz light",
        },
      },
      {
        name: "Kool-aid",
        amount: {
          custom: "1/2 tsp tropical",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Add Kool Aid to a double shot glass, and top with rum. Slam and shoot.",
  },
  {
    name: "Irish Russian",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Kahlua",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Guinness Stout",
        amount: {
          custom: "fill with",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Add the ingredients in the order listed in the recipe. Care must be taken when adding the Guinness to prevent an excess of foam. Do Not add ice.",
  },
  {
    name: "Auburn Headbanger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Jägermeister",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Goldschlager",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Mix in spread glass over ice. Strain and pour in shot glass. Sit down before shotting. ENJOY!!",
  },
  {
    name: "Zima Blaster",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Zima",
        amount: {
          oz: "12",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Fill glass with ice. Pour in Chambord, then fill with Zima. Mix and enjoy.",
  },
  {
    name: "Buccaneer",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Corona",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Bacardi Limon",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer pilsner",
    instructions:
      "Pour the corona into an 18oz beer glass pour the bacardi limon into the beer stir very gently",
  },
  {
    name: "Homemade Kahlua",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Sugar",
        amount: {
          custom: "2 1/2 cups",
        },
      },
      {
        name: "Corn Syrup",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Coffee",
        amount: {
          custom: "1 1/2 oz instant",
        },
      },
      {
        name: "Vanilla Extract",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "3 cups boiling",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 fifth",
        },
      },
    ],
    category: "Homemade Liqueur",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      'Dissolve sugar in 2 cups of boiling water and add corn syrup. Dissolve the instant coffee in the remaining water. Pour syrup and coffee in a gallon jug. Let it cool. Add vodka and vanilla when cold. For the best result, let the mixture "mature" for 4-5 weeks.',
  },
  {
    name: "24k Nightmare",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Goldschlager",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Jägermeister",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Rumple Minze",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "1/2 oz bacardi",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions: "Add over ice,shake and pour.",
  },
  {
    name: "Caribbean Boilermaker",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Corona",
        amount: {
          custom: "1 bottle",
        },
      },
      {
        name: "Light Rum",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Beer",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer pilsner",
    instructions:
      "Pour the Corona into an 18oz beer glass pour the rum into the beer.",
  },
  {
    name: "Army Special",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          ml: "30",
        },
      },
      {
        name: "Gin",
        amount: {
          ml: "30",
        },
      },
      {
        name: "Lime Juice Cordial",
        amount: {
          ml: "45",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "1/2 glass crushed",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour Vodka, Gin and lime cordial into glass, and top up with crushed ice. Wait for ice to melt slightly and sip without a straw.",
  },
  {
    name: "Arizona Twister",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Malibu Rum",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Gold Tequila",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1 splash",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 splash",
        },
      },
      {
        name: "Cream of Coconut",
        amount: {
          custom: "1 splash",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "crushed",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "1 wedge",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "Just mix in the shots of rum, vodka, and tequila. Add splashes of the three juices, heavy on the pineapple. Top off with grenadine. Crushed ice should already be in glass. Top off the glass with a pineapple wedge.",
  },
  {
    name: "Baby Guinness",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      'Pour Kahlua, almost filling shot glass. Then, carefully pour Baileys, using wall of shot glass. This will give the "Guinness" its "head".',
  },
  {
    name: "Alice In Wonderland",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Amaretto",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Southern Comfort",
        amount: {
          shot: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Just mix the three ingredients one to one to one",
  },
  {
    name: "501 Blue",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Blue Curacao",
        amount: {
          custom: "",
        },
      },
      {
        name: "Blueberry Schnapps",
        amount: {
          custom: "",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "",
        },
      },
      {
        name: "Sour Mix",
        amount: {
          custom: "",
        },
      },
      {
        name: "7-up",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions: "Mix equal amounts into a glass with ice.",
  },
  {
    name: "Coke and Drops",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Cola",
        amount: {
          custom: "1 dl",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "7 drops",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
  },
  {
    name: "Ruby Tuesday",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "2 splashes",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour gin and cranberry into a highball filled with ice cubes. Add grenadine and stir.",
  },
  {
    name: "Arctic Mouthwash",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Maui",
        amount: {
          custom: "5 oz blue",
        },
      },
      {
        name: "Mountain Dew",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Blend all ingredients in a blender on high until ice is finely crushed. It should be of a slushy consistency. Pour immediately and serve.",
  },
  {
    name: "Brain Fart",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Everclear",
        amount: {
          custom: "1 fifth",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "1 fifth smirnoff red label",
        },
      },
      {
        name: "Mountain Dew",
        amount: {
          custom: "2 l",
        },
      },
      {
        name: "Surge",
        amount: {
          custom: "2 l",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1 small bottle",
        },
      },
      {
        name: "Rum",
        amount: {
          custom: "1 pint",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Punch bowl",
    instructions:
      "Mix all ingredients together. Slowly and gently. Works best if ice is added to punch bowl and soda's are very cold.",
  },
  {
    name: "Royal Bitch",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Frangelico",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Crown Royal",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Into a shot glass layer the Crown Royal on top of the Frangelico.",
  },
  {
    name: "Citrus Coke",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Bacardi Limon",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "2 parts",
        },
      },
    ],
    category: "Soft Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball Glass",
    instructions:
      "Pour half of coke in a glass. Then add Bacardi and top it off with the remaining coke. Stir and drink up!",
  },
  {
    name: "Smut",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Red Wine",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "1/3 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "1/3 part",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions: "Throw it all together and serve real cold.",
  },
  {
    name: "Raspberry Cooler",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Raspberry Vodka",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon-lime Soda",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Other / Unknown",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the raspberry vodka and soda into a highball glass almost filled with ice cubes. Stir well.",
  },
  {
    name: "Amaretto Sunset",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    ingredients: [
      {
        name: "Triple Sec",
        amount: {
          custom: "1/2 jigger",
        },
      },
      {
        name: "Amaretto",
        amount: {
          shot: "3",
        },
      },
      {
        name: "Cider",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "add 1/2 cup",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins Glass",
    instructions:
      "Shake ingredients in bartender's mixer quickly, just 5 shakes. Strain out ice, serve in glass immediately with a slice of orange.",
  },
  {
    name: "Cherry Electric Lemonade",
    timing: "",
    tastes: ["Sweet", "Sour", "Fruity"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Vodka",
        amount: {
          oz: "1",
        },
      },
      {
        name: "White Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Cherry Grenadine",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Club Soda",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Pint glass",
    instructions:
      "Now stir vigorously and then pour over a large cup of ice. Now drink it with a straw and stir occasionally.",
  },
  {
    name: "Girl From Ipanema",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Cachaca",
        amount: {
          ml: "25",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Agave Syrup",
        amount: {
          ml: "10",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "top up with",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Wine Glass",
    instructions:
      "Add the cachaca, lemon juice and syrup to your boston glass. Add ice and shake until ice cold. Pour into a chilled flute and top-up with Champagne",
  },
  {
    name: "Ipamena",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Lime",
        amount: {
          custom: "½",
        },
      },
      {
        name: "Brown Sugar",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Passion Fruit Juice",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "top up with",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "fill",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Non alcoholic",
    glass: "Wine Glass",
    instructions:
      "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
  },
  {
    name: "Dark Caipirinha",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Demerara Sugar",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Cachaca",
        amount: {
          oz: "2 1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Muddle the sugar into the lime wedges in an old-fashioned glass.\r\nFill the glass with ice cubes.\r\nPour the cachaca into the glass.\r\nStir well.",
  },
  {
    name: "Jam Donut",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Baileys Irish Cream",
        amount: {
          oz: "2/3",
        },
      },
      {
        name: "Chambord Raspberry Liqueur",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 pinches",
        },
      },
    ],
    category: "Shot",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Shot glass",
    instructions:
      "Coat the rim of a shot glass with sugar using sugar syrup to stick. Add the Chambord raspberry liqueur to the shot glass, and carefully layer the Baileys Irish Cream on top. Serve.",
  },
  {
    name: "Aviation",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          cl: "4.5",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          cl: "1.5",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass. Garnish with a cherry.",
  },
  {
    name: "Dirty Martini",
    timing: "",
    tastes: ["Salty"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "70ml/2fl",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          custom: "1 tbsp",
        },
      },
      {
        name: "Olive Brine",
        amount: {
          custom: "2 tbsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1 wedge",
        },
      },
      {
        name: "Olive",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour the vodka, dry vermouth and olive brine into a cocktail shaker with a handful of ice and shake well.\r\nRub the rim of a martini glass with the wedge of lemon.\r\nStrain the contents of the cocktail shaker into the glass and add the olive.\r\nA dirty Martini contains a splash of olive brine or olive juice and is typically garnished with an olive.",
  },
  {
    name: "Duchamp's Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Pisco",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          cl: "2.5",
        },
      },
      {
        name: "Pineapple Syrup",
        amount: {
          cl: "2.5",
        },
      },
      {
        name: "St. Germain",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Pepper",
        amount: {
          custom: "pinch",
        },
      },
      {
        name: "Lavender",
        amount: {
          custom: "2 sprigs",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake all ingredients.\r\nDouble strain in a chilled double old fashioned glass with abig ice cube.\r\nGarnish with a couple of lavender sprigs",
  },
  {
    name: "Bacardi Cocktail",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          custom: "1 3/4 oz bacardi",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake together with ice. Strain into glass and serve.",
  },
  {
    name: "Between the Sheets",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into shaker with ice cubes, shake, strain into chilled cocktail glass.",
  },
  {
    name: "Casino",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1/4 tsp",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well. Strain into chilled cocktail glass. Garnish with a lemon twist and a maraschino cherry. Serve without a straw.",
  },
  {
    name: "Clover Club",
    timing: "",
    tastes: ["Sweet", "Tart"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Dry shake ingredients to emulsify, add ice, shake and served straight up.",
  },
  {
    name: "Derby",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Peach Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "2 fresh leaves",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
  },
  {
    name: "Mary Pickford",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake and strain into a chilled large cocktail glass",
  },
  {
    name: "Monkey Gland",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Benedictine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.",
  },
  {
    name: "Paradise",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          custom: "7 parts",
        },
      },
      {
        name: "Apricot Brandy",
        amount: {
          custom: "4 parts",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "3 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake together over ice. Strain into cocktail glass and serve chilled.",
  },
  {
    name: "Planter's Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Orgeat Syrup",
        amount: {
          custom: "1/2 part",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Punch / Party Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      'Pour all ingredients, except the bitters, into shaker filled with ice. Shake well. Pour into large glass, filled with ice. Add Angostura bitters, "on top". Garnish with cocktail cherry and pineapple.',
  },
  {
    name: "Porto Flip",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Port",
        amount: {
          custom: "9 parts",
        },
      },
      {
        name: "Egg Yolk",
        amount: {
          custom: "2 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.",
  },
  {
    name: "Stinger",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Brandy",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "White Creme De Menthe",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour in a mixing glass with ice, stir and strain into a cocktail glass. May also be served on rocks in a rocks glass.",
  },
  {
    name: "White Lady",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          custom: "4cl",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "3cl",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "2cl",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Unforgettables",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and strain into large cocktail glass.",
  },
  {
    name: "Bellini",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Champagne",
        amount: {
          oz: "6",
        },
      },
      {
        name: "Peach Schnapps",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Champagne Flute",
    instructions:
      "Pour peach purée into chilled flute, add sparkling wine. Stir gently.",
  },
  {
    name: "Cosmopolitan",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/4",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1/4",
        },
      },
      {
        name: "Cointreau",
        amount: {
          oz: "1/4",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          custom: "1/4 cup",
        },
      },
    ],
    category: "Cocktail",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel.",
  },
  {
    name: "French 75",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "2 tsp superfine",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "4 oz chilled",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Combine gin, sugar, and lemon juice in a cocktail shaker filled with ice. Shake vigorously and strain into a chilled champagne glass. Top up with Champagne. Stir gently.",
  },
  {
    name: "French Connection",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Cognac",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Amaretto",
        amount: {
          oz: "3/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Pour all ingredients directly into old fashioned glass filled with ice cubes. Stir gently.",
  },
  {
    name: "Golden Dream",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Galliano",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Cream",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake with cracked ice. Strain into glass and serve.",
  },
  {
    name: "Grasshopper",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Green Creme De Menthe",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Creme De Cacao",
        amount: {
          custom: "3/4 oz white",
        },
      },
      {
        name: "Light Cream",
        amount: {
          oz: "3/4",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour ingredients into a cocktail shaker with ice. Shake briskly and then strain into a chilled cocktail glass.",
  },
  {
    name: "Hemingway Special",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "12 parts",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          custom: "8 parts",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "3 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Pour all ingredients into a shaker with ice. Shake.",
  },
  {
    name: "Horse's Neck",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 long strip",
        },
      },
      {
        name: "Brandy",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          oz: "5",
        },
      },
      {
        name: "Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour brandy and ginger ale directly into highball glass with ice cubes. Stir gently. Garnish with lemon zest. If desired, add dashes of Angostura Bitter.",
  },
  {
    name: "Kir",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Creme De Cassis",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "5 parts",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Wine Glass",
    instructions:
      "Add the crème de cassis to the bottom of the glass, then top up with wine.",
  },
  {
    name: "Long Island Iced Tea",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Light Rum",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Cola",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Mix all contents in a highball glass and sitr gently. Add dash of Coca-Cola for the coloring and garnish with lemon or lime twist.",
  },
  {
    name: "Mimosa",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Champagne",
        amount: {
          custom: "chilled",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "2",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Ensure both ingredients are well chilled, then mix into the glass. Serve cold.",
  },
  {
    name: "Mint Julep",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Mint",
        amount: {
          custom: "4 fresh",
        },
      },
      {
        name: "Bourbon",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Water",
        amount: {
          custom: "2 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "In a highball glass gently muddle the mint, sugar and water. Fill the glass with cracked ice, add Bourbon and stir well until the glass is well frosted. Garnish with a mint sprig.",
  },
  {
    name: "Pina Colada",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Coconut Milk",
        amount: {
          custom: "3 tblsp",
        },
      },
      {
        name: "Pineapple",
        amount: {
          custom: "3 tblsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Mix with crushed ice in blender until smooth. Pour into chilled glass, garnish and serve.",
  },
  {
    name: "Rose",
    timing: "",
    tastes: ["Floral"],
    ingredients: [
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Apricot Brandy",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          custom: "1/2 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Powdered Sugar",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "Contemporary Classics",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake together in a cocktail shaker, then strain into chilled glass. Garnish and serve.",
  },
  {
    name: "Barracuda",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          cl: "4.5",
        },
      },
      {
        name: "Galliano",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Prosecco",
        amount: {
          custom: "top up",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Margarita glass",
    instructions:
      "Shake pour ingredients with ice. Strain into glass, top with Sparkling wine.",
  },
  {
    name: "Bramble",
    timing: "",
    tastes: ["Sweet", "Tart"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Creme De Mure",
        amount: {
          cl: "1.5",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Old-Fashioned glass",
    instructions:
      "Fill glass with crushed ice. Build gin, lemon juice and simple syrup over. Stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. Garnish with two blackberries and lemon slice.",
  },
  {
    name: "Dark and Stormy",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Ginger Beer",
        amount: {
          cl: "10",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "In a highball glass filled with ice add 6cl dark rum and top with ginger beer. Garnish with lime wedge.",
  },
  {
    name: "Espresso Martini",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "5",
        },
      },
      {
        name: "Kahlua",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour ingredients into shaker filled with ice, shake vigorously, and strain into chilled martini glass",
  },
  {
    name: "French Martini",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "4.5",
        },
      },
      {
        name: "Raspberry Liqueur",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          cl: "1.5",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into shaker with ice cubes. Shake well and strain into a chilled cocktail glass. Squeeze oil from lemon peel onto the drink.",
  },
  {
    name: "Russian Spring Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          cl: "2.5",
        },
      },
      {
        name: "Creme De Cassis",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          cl: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          cl: "2.5",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the ingredients into an highball glass, top with Sparkling wine.",
  },
  {
    name: "Spritz",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Prosecco",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Campari",
        amount: {
          cl: "4",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "splash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Old-Fashioned glass",
    instructions: "Build into glass over ice, garnish and serve.",
  },
  {
    name: "Tommy's Margarita",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          cl: "4.5",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Agave Syrup",
        amount: {
          custom: "2 spoons",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Old-Fashioned glass",
    instructions: "Shake and strain into a chilled cocktail glass.",
  },
  {
    name: "Vampiro",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    ingredients: [
      {
        name: "Tequila",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Tomato Juice",
        amount: {
          cl: "3",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          cl: "3",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Salt",
        amount: {
          custom: "1 pinch",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Old-Fashioned glass",
    instructions:
      'Vampiros may be made in a tall glass or an old fashioned glass. Bartenders may first "rim" the glass with Kosher Salt, which is done by placing a layer of Kosher Salt on a chopping board, moistening the glass\' rim with lime juice or water, and then placing the upside down glass rim onto the Kosher Salt, so that the salt sticks to the moistened rim. The second step is to fill half the glass with ice and add one or two shooter glasses full of high quality Tequila. The next stage is to add the flavouring elements. This is done by squeezing a fresh lime into the glass, adding a few grains of salt, adding citrus-flavoured soda pop, until the glass is 4/5 full, and then adding spicy Viuda de Sanchez (or orange juice, lime juice and pico de gallo). The final step is to stir the ingredients so that the flavours are properly blended.',
  },
  {
    name: "Vesper",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          cl: "6",
        },
      },
      {
        name: "Vodka",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Lillet Blanc",
        amount: {
          cl: "0.75",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake over ice until well chilled, then strain into a deep goblet and garnish with a thin slice of lemon peel.",
  },
  {
    name: "Yellow Bird",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "White Rum",
        amount: {
          cl: "3",
        },
      },
      {
        name: "Galliano",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          cl: "1.5",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          cl: "1.5",
        },
      },
    ],
    category: "Cocktail",
    iba: "New Era Drinks",
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake and strain into a chilled cocktail glass",
  },
  {
    name: "Butter Baby",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "2 scoops",
        },
      },
      {
        name: "Butterscotch Schnapps",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "full glass",
        },
      },
      {
        name: "Vodka",
        amount: {
          custom: "2 parts",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer mug",
    instructions:
      "Blend together in a blender. Serve in a chilled Beer mug with Fresh Blueberries and caramel for topping.",
  },
  {
    name: "Boozy Snickers Milkshake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Vanilla Ice-cream",
        amount: {
          custom: "3 cups",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "1 cup",
        },
      },
      {
        name: "Godiva Liqueur",
        amount: {
          custom: "1/2 cup",
        },
      },
      {
        name: "Whipped Cream",
        amount: {
          custom: "for topping",
        },
      },
      {
        name: "Caramel Sauce",
        amount: {
          custom: "4 tablespoons",
        },
      },
      {
        name: "Chocolate Sauce",
        amount: {
          custom: "4 tablespoons",
        },
      },
      {
        name: "Mini-snickers Bars",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Shake",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Mason jar",
    instructions:
      "Place the snickers bars in a plastic bag and roll over them with a rolling pin until crushed. Add crushed snickers pieces, ice cream, milk, caramel sauce, chocolate sauce, and chocolate liquor to a blender. Blend until shake is thick and frothy. Pour into glasses and top with chocolate liquor and whip cream.",
  },
  {
    name: "A1",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          shot: "1 3/4",
        },
      },
      {
        name: "Grand Marnier",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          shot: "1/4",
        },
      },
      {
        name: "Grenadine",
        amount: {
          shot: "1/8",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
  },
  {
    name: "Abbey Martini",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "3 dashes",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Put all ingredients into a shaker and mix, then strain contents into a chilled cocktail glass.",
  },
  {
    name: "Absolutely Fabulous",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "top up with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Champagne flute",
    instructions:
      "Mix the Vodka and Cranberry juice together in a shaker and strain into a glass. Top up with Champagne.",
  },
  {
    name: "Ace",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Heavy Cream",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Milk",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1/2 fresh",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions:
      "Shake all the ingredients in a cocktail shaker and ice then strain in a cold glass.",
  },
  {
    name: "Adam & Eve",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Cognac",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Creme De Cassis",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          shot: "1/8",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake together all the ingredients and strain into a cold glass.",
  },
  {
    name: "Addington",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          shot: "2",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "top up with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Mix both the vermouth's in a shaker and strain into a cold glass. Top up with a squirt of Soda Water. ",
  },
  {
    name: "Addison",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          shot: "1 1/2",
        },
      },
      {
        name: "Vermouth",
        amount: {
          shot: "1 1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions:
      "Shake together all the ingredients and strain into a cold glass.",
  },
  {
    name: "Adios Amigos Cocktail",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          shot: "1",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Cognac",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Gin",
        amount: {
          shot: "1/2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          shot: "1/4",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          shot: "1/4",
        },
      },
      {
        name: "Water",
        amount: {
          shot: "1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions:
      "Shake together all the ingredients and strain into a cold glass.",
  },
  {
    name: "Gin Rickey",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "juice of 1/2",
        },
      },
      {
        name: "Soda Water",
        amount: {
          custom: "top up with",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "garnish",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Half-fill a tall glass with ice. Mix the gin and Grenadine together and pour over the ice. Add the lime or lemon juice and top off with soda water. Decorate the glass with lime and/or lemon slices.",
  },
  {
    name: "Salted Toffee Martini",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Chocolate Liqueur",
        amount: {
          ml: "30",
        },
      },
      {
        name: "Amaretto",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Chocolate Sauce",
        amount: {
          custom: "garnish",
        },
      },
      {
        name: "Salted Chocolate",
        amount: {
          custom: "grated",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add ice, toffee gin, chocolate liqueur and Amaretto to a cocktail shaker and shake vigorously. \r\nPour the chocolate syrup into a saucer and dip the top of a martini glass into the sauce. Grate some of the Willie\\'s sea salt chocolate into another saucer and dip the coated glass, so the flakes stick to the sauce, creating a chocolate rim!\r\nPour the contents of the shaker into your chocolatey glass and sprinkle with more grated chocolate - enjoy!  ",
  },
  {
    name: "Hunter's Moon",
    timing: "",
    tastes: ["Sweet", "Tart"],
    ingredients: [
      {
        name: "Vermouth",
        amount: {
          ml: "25",
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          ml: "10",
        },
      },
      {
        name: "Lemonade",
        amount: {
          ml: "100",
        },
      },
      {
        name: "Blackberries",
        amount: {
          custom: "2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Balloon Glass",
    instructions:
      "Put the Bombay Sapphire, Martini Bianco, sugar syrup & blackberries in a cocktail shaker with lots of ice and shake vigorously before pouring into a balloon glass, topping up with lemonade and garnishing with a wedge of orange.",
  },
  {
    name: "Zombie",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Gold Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Pernod",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "1 drop",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Hurricane glass",
    instructions:
      "\r\nBlend at high speed for no more than 5 seconds.\r\n\r\nPour into a glass, add ice cubes to fill, then add the garnish.\r\n\r\n*Donn’s mix: Bring 3 crushed cinnamon sticks, 1 cup of sugar and 1 cup of water to a boil, stirring until the sugar is dissolved.\r\n\r\nSimmer for 2 minutes, then remove from the heat and let sit for at least 2 hours before straining into a clean glass bottle.\r\n\r\nThen add 1 part of the syrup and 2 parts of fresh grapefruit juice together.",
  },
  {
    name: "Bombay Cassis",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Creme De Cassis",
        amount: {
          ml: "20",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Ginger Beer",
        amount: {
          ml: "75",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Ginger",
        amount: {
          custom: "1 long strip",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Balloon Glass",
    instructions:
      "Add the Bombay Sapphire, Crème de Cassis and lime juice to a balloon glass and swirl well to mix.\r\nFill the glass with good quality cubed ice.\r\nTop up with chilled and freshly opened Fever-Tree Ginger Beer.\r\nGently stir to combine, top with a gently squeezed lime wedge and finish with a fresh ginger slice.",
  },
  {
    name: "Rosemary Blue",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          ml: "100",
        },
      },
      {
        name: "Rosemary",
        amount: {
          custom: "garnish with",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Balloon Glass",
    instructions:
      "1) Add the Bombay Sapphire, Blue Curacao, rosemary sprig and gently squeezed lemon wedge to a balloon glass. Swirl well to combine.\r\n2) Fill with cubed ice and top with the Fever-Tree Light Tonic Water.\r\n3) Gently fold with a bar spoon to mix.",
  },
  {
    name: "Empellón Cocina's Fat-washed Mezcal",
    timing: "",
    tastes: ["Smoky"],
    ingredients: [
      {
        name: "Mezcal",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Chocolate Liqueur",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Coffee Liqueur",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Beer Glass",
    instructions:
      'To ensure that your pork fat is just as delicious as theirs, here’s their adobo marinade and what to do with it (you’ll also need a rack of ribs):\r\n\r\n4 ancho chiles, 8 guajillo chiles and 4 chipotle chiles, plus 4 cloves roasted garlic, half a cup of cider vinegar, a quarter teaspoon of Mexican oregano, 1 teaspoon of ground black pepper, a whole clove, a quarter teaspoon of ground cinnamon and a half teaspoon of ground cumin.\r\n\r\nToast the dried chiles and soak in water for at least an hour until they are rehydrated. Drain and discard the soaking liquid. Combine the soaked chiles with the remaining ingredients and purée until smooth.\r\n\r\nCold smoke a rack of baby back pork ribs by taking a large hotel pan with woodchips on one side and charcoal on the other. Place another, smaller, pan with pork ribs, above the charcoal/woodchip pan. Ignite the charcoal, being careful to not ignite the woodchips. Cover both pans with foil and allow to smoke for 10-15 minutes, until desired level of smoke is achieved, then coat with adobo marinade and wrap in tin foil prior to placing ribs in a 300 degree oven for 7 hours. When the ribs have cooled, strain off the fat and use for the infusion.\r\n\r\nIf you’re having a hard time coming up to the same kind of volume of fat, make up the balance with pork lard from a butcher. To get the same depth of flavor without the ribs, heat up the fat in a pot with a few spoons of the marinade.\r\n\r\nOnce you’ve got your tub of seasoned pork fat in cooled liquid form, pour equal amounts of Ilegal Joven mezcal and fat into a sealable container. Seal the container and give it a really good shake, then put it in the freezer overnight. When the whole thing is separated and congealed, pour it through a fine mesh chinoise. If you don’t have a chinoise, try a fine mesh strainer, or if you don’t have one of those, try spooning off most of the fat. There will be some beads of orange fat left in the strained mezcal: run that through a few layers of cheesecloth (or coffee filters in a pinch) to get rid of the last of it.\r\n\r\nThe mezcal is now ready for drinking, straight-up or in a cocktail. \r\n\r\nHabanero tincture\r\n\r\nSlice habaneros and add 2 ounces Ilegal Joven mezcal.\r\nAllow to sit overnight or until desired level of heat is achieved.\r\nCocktail\r\n\r\nCombine mezcal and chocolate liqueur in a mixing glass with ice and stir for 45 seconds.\r\nStrain into chilled coupe.\r\nCarefully "sink" the coffee liqueur down the inside of the coupe over a spoon.\r\nGarnish with 5 drops habanero tincture.',
  },
  {
    name: "The Last Word",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Green Chartreuse",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake with ice and strain into a cocktail glass.",
  },
  {
    name: "French Negroni",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lillet",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions:
      "Add ice to a shaker and pour in all ingredients.\nUsing a bar spoon, stir 40 to 45 revolutions or until thoroughly chilled.\nStrain into a martini glass or over ice into a rocks glass. Garnish with orange twist.",
  },
  {
    name: "Pegu Club",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Curacao",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Shake, strain, up, cocktail glass",
  },
  {
    name: "Corpse Reviver",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lillet Blanc",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Absinthe",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake, strain, straight up, cocktail glass rinsed with absinthe\r\n",
  },
  {
    name: "Boulevardier",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Campari",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Rye Whiskey",
        amount: {
          oz: "1 1/4",
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions: "Stir with ice, strain, garnish and serve.",
  },
  {
    name: "Greyhound",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Vodka",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions:
      "Add the vodka to a Collins glass filled with ice.\nTop with grapefruit juice and stir.\n\n",
  },
  {
    name: "Paloma",
    timing: "",
    tastes: ["Sweet", "Sour"],
    ingredients: [
      {
        name: "Grape Soda",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Tequila",
        amount: {
          oz: "1 1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Collins glass",
    instructions: "Stir together and serve over ice.",
  },
  {
    name: "Bijou",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Green Chartreuse",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Gin",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions: "Stir in mixing glass with ice and strain\r\n",
  },
  {
    name: "Gimlet",
    timing: "",
    tastes: ["Sour"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "2 1/2",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Simple Syrup",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Martini Glass",
    instructions:
      "Add all the ingredients to a shaker and fill with ice.\r\n\r\nShake, and strain into a chilled cocktail glass or an Old Fashioned glass filled with fresh ice.\r\n\r\nGarnish with a lime wheel.",
  },
  {
    name: "Martinez 2",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Maraschino Liqueur",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
  },
  {
    name: "Oatmeal Cookie",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Kahlua",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Baileys Irish Cream",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Butterscotch Schnapps",
        amount: {
          custom: "4 parts",
        },
      },
      {
        name: "Jagermeister",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Goldschlager",
        amount: {
          custom: "1/2 part",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Mason jar",
    instructions:
      "Just mix it all together.\r\nIt's meant to be a shot, but it works just fine as a proper adult-sized drink over lots of ice.\r\n\r\nTastes like an oatmeal cookie.",
  },
  {
    name: "Bahama Mama",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "3 parts",
        },
      },
      {
        name: "Dark Rum",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Banana Liqueur",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          custom: "1 part",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Add 2 parts club soda or more or less to taste.\r\n\r\nMix it all together and pour over a bunch of ice. Drink with a straw.",
  },
  {
    name: "Blue Hurricane",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Rum",
        amount: {
          custom: "4 parts",
        },
      },
      {
        name: "Dark Rum",
        amount: {
          custom: "2 parts",
        },
      },
      {
        name: "Passoa",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Blue Curacao",
        amount: {
          custom: "1 part",
        },
      },
      {
        name: "Sweet and Sour",
        amount: {
          custom: "6 parts",
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "cubes",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "If each part is 1/2 oz then use about 2.5 cups of ice.\r\n\r\nBlend it all together. \r\nDrink it with a big straw if you have one.\r\n\r\n",
  },
  {
    name: "The Laverstoke",
    timing: "",
    tastes: ["Herbal"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Elderflower Cordial",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Rosso Vermouth",
        amount: {
          ml: "15",
        },
      },
      {
        name: "Tonic Water",
        amount: {
          ml: "75",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: "2 wedges",
        },
      },
      {
        name: "Ginger",
        amount: {
          custom: "1 slice",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "1 large sprig",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Balloon Glass",
    instructions:
      "1) Squeeze two lime wedges into a balloon glass then add the cordial, Bombay Sapphire and MARTINI Rosso Vermouth, swirl to mix.\r\n\r\n2) Fully fill the glass with cubed ice and stir to chill.\r\n\r\n3) Top with Fever-Tree Ginger Ale and gently stir again to combine.\r\n\r\n4) Garnish with a snapped ginger slice and an awoken mint sprig.",
  },
  {
    name: "Brigadier",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    ingredients: [
      {
        name: "Hot Chocolate",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Green Chartreuse",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Cherry Heering",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Coupe Glass",
    instructions: "Mix ingredients in a warmed mug and stir.",
  },
  {
    name: "The Jimmy Conway",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Amaretto",
        amount: {
          ml: "50",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "4",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Whiskey sour glass",
    instructions:
      "Fill glass with ice\r\nPour in The Irishman and Disaronno\r\nFill to the top with Cranberry Juice\r\nGarnish with a slice of lemon…Enjoy!",
  },
  {
    name: "Old Pal",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Rye Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Campari",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Nick and Nora Glass",
    instructions:
      "Chill cocktail glass. Add ingredients to a mixing glass, and fill 2/3 full with ice. Stir about 20 seconds. Empty cocktail glass and strain into the glass. Garnish with a twist of lemon peel.",
  },
  {
    name: "Tipperary",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    ingredients: [
      {
        name: "Irish Whiskey",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Green Chartreuse",
        amount: {
          oz: "1/2",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Nick and Nora Glass",
    instructions:
      "Stir over ice. Strain into chilled glass. Cut a wide swath of orange peel, and express the orange oils over the drink. Discard orange twist.",
  },
  {
    name: "Penicillin",
    timing: "",
    tastes: ["Smoky"],
    ingredients: [
      {
        name: "Blended Scotch",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Honey Syrup",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Ginger Syrup",
        amount: {
          custom: "2 tsp",
        },
      },
      {
        name: "Islay Single Malt Scotch",
        amount: {
          oz: "1/4",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Shake blended Scotch, lemon juice, honey syrup and ginger syrup with ice. Strain over large ice in chilled rocks glass. Float smoky Scotch on top (be sure to use a smoky Scotch such as an Islay single malt). Garnish with candied ginger.",
  },
  {
    name: "Corn N Oil",
    timing: "",
    tastes: ["Bitter sweet"],
    ingredients: [
      {
        name: "Lime",
        amount: {
          custom: "1/2",
        },
      },
      {
        name: "Falernum",
        amount: {
          oz: "1/3",
        },
      },
      {
        name: "Angostura Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
      {
        name: "Añejo Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Blackstrap Rum",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Cocktail",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Cut the half lime in half again. Add the lime, falernum, and bitters to a rocks glass. Muddle. Add the rum. (Aged Barbados rum such as Plantation 5 Year is recommended). Add ice and stir. Float the blackstrap rum on top. Serve with a straw.",
  },
  {
    name: "A Furlong Too Late",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Ginger Beer",
        amount: {
          oz: "4",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour the rum and ginger beer into a highball glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
  },
  {
    name: "A Night In Old Mandalay",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Añejo Rum",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          oz: "3",
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine the light rum, añejo rum, orange juice, and lemon juice. Shake well. Strain into a highball glass almost filled with ice cubes. Top with the ginger ale. Garnish with the lemon twist.",
  },
  {
    name: "A. J.",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Applejack",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Grapefruit Juice",
        amount: {
          oz: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake ingredients with ice, strain into a cocktail glass, and serve.",
  },
  {
    name: "Abbey Cocktail",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Gin",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
      {
        name: "Orange",
        amount: {
          custom: "juice of 1/4",
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Shake all ingredients (except for the cherry) with ice and strain into a cocktail glass. Top with the cherry and serve.",
  },
  {
    name: "Abilene",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Peach Nectar",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "3",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour all of the ingredients into a highball glass almost filled with ice cubes. Stir well.",
  },
  {
    name: "Acapulco",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    ingredients: [
      {
        name: "Light Rum",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Triple Sec",
        amount: {
          custom: "1 1/2 tsp",
        },
      },
      {
        name: "Lime Juice",
        amount: {
          custom: "1 tblsp",
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "1",
        },
      },
      {
        name: "Mint",
        amount: {
          custom: "1",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Old-fashioned glass",
    instructions:
      "Combine and shake all ingredients (except mint) with ice and strain into an old-fashioned glass over ice cubes. Add the sprig of mint and serve.",
  },
  {
    name: "Adam",
    timing: "",
    tastes: ["Sweet"],
    ingredients: [
      {
        name: "Dark Rum",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Lemon Juice",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Grenadine",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a shaker half-filled with ice cubes, combine all of the ingredients. Shake well. Strain into a cocktail glass.",
  },
  {
    name: "Adonis Cocktail",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "3/4",
        },
      },
      {
        name: "Sherry",
        amount: {
          custom: "1 1/2 oz dry",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "1 dash",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "Stir all ingredients with ice, strain contents into a cocktail glass, and serve.",
  },
  {
    name: "Affair",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Strawberry Schnapps",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Orange Juice",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Cranberry Juice",
        amount: {
          oz: "2",
        },
      },
      {
        name: "Club Soda",
        amount: {
          custom: "",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Highball glass",
    instructions:
      "Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.",
  },
  {
    name: "Affinity",
    timing: "",
    tastes: ["Boozy"],
    ingredients: [
      {
        name: "Scotch",
        amount: {
          oz: "1 1/2",
        },
      },
      {
        name: "Sweet Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Dry Vermouth",
        amount: {
          oz: "1",
        },
      },
      {
        name: "Orange Bitters",
        amount: {
          custom: "2 dashes",
        },
      },
    ],
    category: "Ordinary Drink",
    iba: null,
    alcoholic: "Alcoholic",
    glass: "Cocktail glass",
    instructions:
      "In a mixing glass half-filled with ice cubes, combine all of the ingredients. Stir well. Strain into a cocktail glass.",
  },
];
