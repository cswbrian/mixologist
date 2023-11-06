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
    preparation: "",
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
    preparation: "",
  },
  {
    name: "Long Island Tea",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Negroni",
    timing: "",
    tastes: ["Bitter sweet", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Whiskey Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Lemon",
        amount: {
          custom: "1/2 slice",
        },
      },
    ],
  },
  {
    name: "Dry Martini",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Margarita",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Manhattan",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Orange Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
  },
  {
    name: "Moscow Mule",
    timing: "",
    tastes: ["Sour", "Spicy"],
    preparation: "",
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
  },
  {
    name: "After Dinner Cocktail",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "After Supper Cocktail",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Alabama Slammer",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Alaska Cocktail",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Alexander",
    timing: "",
    tastes: ["Creamy"],
    preparation: "",
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
  },
  {
    name: "Brandy Alexander",
    timing: "",
    tastes: ["Creamy"],
    preparation: "",
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
  },
  {
    name: "Alfie Cocktail",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Algonquin",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Allegheny",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Allies Cocktail",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Almeria",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Almond Joy",
    timing: "",
    tastes: ["Nutty", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Amaretto and Cream",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Amaretto Mist",
    timing: "",
    tastes: ["Nutty"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Amaretto Rose",
    timing: "",
    tastes: ["Nutty", "Floral"],
    preparation: "",
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
  },
  {
    name: "Amaretto Stinger",
    timing: "",
    tastes: ["Nutty"],
    preparation: "",
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
  },
  {
    name: "Amaretto Tea",
    timing: "",
    tastes: ["Nutty"],
    preparation: "",
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
  },
  {
    name: "Angel Face",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Applecar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Apricot Lady",
    timing: "",
    tastes: ["Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Archbishop",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Arise My Love",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Arthur Tompkins",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Artillery",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Balmoral",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Banana Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Bermuda Highball",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Black Russian",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Blackthorn",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Bloody Maria",
    timing: "",
    tastes: ["Spicy"],
    preparation: "",
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
  },
  {
    name: "Bloody Mary",
    timing: "",
    tastes: ["Spicy"],
    preparation: "",
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
  },
  {
    name: "Blue Lagoon",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Blue Margarita",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Blue Mountain",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Bluebird",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 twist of",
        },
      },
    ],
  },
  {
    name: "Bobby Burns Cocktail",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Boomerang",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Boston Sidecar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Boston Sour",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Classic Old-fashioned",
    timing: "",
    tastes: ["Bitter sweet", "Boozy"],
    preparation: "",
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
          custom: 1,
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
          custom: 1,
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Bourbon Sling",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Bourbon Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Boxcar",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Brandy Cobbler",
    timing: "",
    tastes: ["Fruity"],
    preparation: "",
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
          custom: 1,
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Brandy Flip",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Brandy Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Caipirinha",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Cachaca",
        amount: {
          oz: "2 1/2",
        },
      },
    ],
  },
  {
    name: "California Lemonade",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Casa Blanca",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Casino Royale",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Champagne Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Cherry Rum",
    timing: "",
    tastes: ["Fruity"],
    preparation: "",
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
  },
  {
    name: "Chicago Fizz",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Chocolate Black Russian",
    timing: "",
    tastes: ["Boozy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "City Slicker",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Clove Cocktail",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Cuba Libre",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Dragonfly",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Dry Rob Roy",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Dubonnet Cocktail",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "English Highball",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "English Rose Cocktail",
    timing: "",
    tastes: ["Floral"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Flying Dutchman",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Flying Scotchman",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
        name: "Sugar Syrup",
        amount: {
          custom: "1/4 tsp",
        },
      },
    ],
  },
  {
    name: "Foxy Lady",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Frisco Sour",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
  },
  {
    name: "Frozen Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Ice",
        amount: {
          custom: "1 cup crushed",
        },
      },
    ],
  },
  {
    name: "Frozen Mint Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
          custom: 6,
        },
      },
      {
        name: "Sugar",
        amount: {
          custom: "1 tsp",
        },
      },
    ],
  },
  {
    name: "Frozen Pineapple Daiquiri",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Gentleman's Club",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Gin and Tonic",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Gin Cooler",
    timing: "",
    tastes: ["Fresh"],
    preparation: "",
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
  },
  {
    name: "Gin Daisy",
    timing: "",
    tastes: ["Fresh"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Gin Fizz",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Gin Sling",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Gin Smash",
    timing: "",
    tastes: ["Fresh", "Herbal", "Boozy"],
    preparation: "",
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
          custom: 4,
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Gin Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Gin Squirt",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    preparation: "",
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
          custom: 2,
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Gin Swizzle",
    timing: "",
    tastes: ["Fresh", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Gin Toddy",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Godchild",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Godfather",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Godmother",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Grass Skirt",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Harvey Wallbanger",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Havana Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Hawaiian Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Highland Fling Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Imperial Fizz",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Irish Spring",
    timing: "",
    tastes: ["Herbal", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Jack Rose Cocktail",
    timing: "",
    tastes: ["Herbal", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Japanese Fizz",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Jewel of the Nile",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "John Collins",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Kamikaze",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Kentucky B and B",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Kentucky Colonel",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Lady Love Fizz",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Carbonated Water",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Loch Lomond",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "London Town",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Lone Tree Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Lone Tree Cooler",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Lord and Lady",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Mai Tai",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Martinez Cocktail",
    timing: "",
    tastes: ["Boozy", "Bitter sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Martini",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Midnight Cowboy",
    timing: "",
    tastes: ["Boozy", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Mississippi Planters Punch",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Monkey Wrench",
    timing: "",
    tastes: ["Boozy", "Spicy"],
    preparation: "",
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
  },
  {
    name: "New York Sour",
    timing: "",
    tastes: ["Sour", "Fresh"],
    preparation: "",
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
  },
  {
    name: "Orange Oasis",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Orgasm",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Pink Gin",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Pink Lady",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Poppy Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Port and Starboard",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Port Wine Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Port Wine Flip",
    timing: "",
    tastes: ["Boozy", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Quaker's Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Quarter Deck Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Queen Bee",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Queen Charlotte",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Queen Elizabeth",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Quentin",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Royal Fizz",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Royal Gin Fizz",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Rum Cobbler",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Rum Cooler",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Rum Milk Punch",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Rum Old-fashioned",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Rum Screwdriver",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Rum Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Rum Toddy",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Rusty Nail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Salty Dog",
    timing: "",
    tastes: ["Salty"],
    preparation: "",
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
  },
  {
    name: "Sazerac",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Scooter",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Scotch Cobbler",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Scotch Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Screwdriver",
    timing: "",
    tastes: ["Fresh", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Shanghai Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Sherry Eggnog",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Sherry Flip",
    timing: "",
    tastes: ["Creamy", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Sidecar",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Sidecar Cocktail",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Singapore Sling",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Sloe Gin Cocktail",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Sol Y Sombra",
    timing: "",
    tastes: ["Boozy", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Stone Sour",
    timing: "",
    tastes: ["Sour", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Strawberry Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Strawberry Margarita",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Tequila Fizz",
    timing: "",
    tastes: ["Fresh", "Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Ginger Ale",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Tequila Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Thriller",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Tom Collins",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Turf Cocktail",
    timing: "",
    tastes: ["Sweet", "Herbal", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Tuxedo Cocktail",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Valencia Cocktail",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Van Vleet",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Vermouth Cassis",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Vesuvio",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Veteran",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Victor",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Victory Collins",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Vodka and Tonic",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Waikiki Beachcomber",
    timing: "",
    tastes: ["Fresh", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Whiskey Mac",
    timing: "",
    tastes: ["Boozy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "White Russian",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Afterglow",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Alice Cocktail",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Apple Karate",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Bora Bora",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Orangeade",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Rail Splitter",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
    ingredients: [
      {
        name: "Sugar Syrup",
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
  },
  {
    name: "Banana Milk Shake",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Banana Strawberry Shake",
    timing: "",
    tastes: ["Creamy", "Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Banana Strawberry Shake Daiquiri",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Egg Cream",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Fruit Cooler",
    timing: "",
    tastes: ["Fresh", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Apple",
        amount: {
          custom: 1,
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
  },
  {
    name: "Fruit Flip-flop",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Fruit Shake",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
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
          custom: 6,
        },
      },
    ],
  },
  {
    name: "Just A Moonmint",
    timing: "",
    tastes: ["Fresh", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Lassi - A South Indian Drink",
    timing: "",
    tastes: ["Creamy", "Tart"],
    preparation: "",
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
  },
  {
    name: "Lassi Khara",
    timing: "",
    tastes: ["Creamy", "Tart"],
    preparation: "",
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
  },
  {
    name: "Lassi Raita",
    timing: "",
    tastes: ["Creamy", "Tart"],
    preparation: "",
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
  },
  {
    name: "Lassi - Sweet",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Lassi - Mango",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
    ingredients: [
      {
        name: "Mango",
        amount: {
          custom: 2,
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
  },
  {
    name: "Lemouroudji",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Limeade",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Imperial Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Banana Cantaloupe Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Apple Berry Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
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
          custom: 2,
        },
      },
    ],
  },
  {
    name: "Grape Lemon Pineapple Smoothie",
    timing: "",
    tastes: ["Fruity", "Tart"],
    preparation: "",
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
  },
  {
    name: "Kiwi Papaya Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
    ingredients: [
      {
        name: "Kiwi",
        amount: {
          custom: 3,
        },
      },
      {
        name: "Papaya",
        amount: {
          custom: "1/2",
        },
      },
    ],
  },
  {
    name: "Mango Orange Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
    ingredients: [
      {
        name: "Mango",
        amount: {
          custom: 1,
        },
      },
      {
        name: "Orange",
        amount: {
          custom: 2,
        },
      },
    ],
  },
  {
    name: "Pineapple Gingerale Smoothie",
    timing: "",
    tastes: ["Creamy", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Kill the Cold Smoothie",
    timing: "",
    tastes: ["Fresh"],
    preparation: "",
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
  },
  {
    name: "Strawberry Shivers",
    timing: "",
    tastes: ["Creamy", "Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Sweet Bananas",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Honey",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
  },
  {
    name: "Tomato Tang",
    timing: "",
    tastes: ["Fresh", "Tart"],
    preparation: "",
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
  },
  {
    name: "Yoghurt Cooler",
    timing: "",
    tastes: ["Creamy", "Tart"],
    preparation: "",
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
  },
  {
    name: "Castillian Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Chocolate Beverage",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          custom: 3,
        },
      },
    ],
  },
  {
    name: "Chocolate Drink",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Drinking Chocolate",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          custom: 1,
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
  },
  {
    name: "Hot Chocolate To Die For",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Microwave Hot Cocoa",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Nuked Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Orange Scented Hot Chocolate",
    timing: "",
    tastes: ["Creamy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Spanish Chocolate",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Lemon Shot",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
  },
  {
    name: "Sex On the Beach",
    timing: "",
    tastes: ["Fruity", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Autodafé",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Gagliardo",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Surf City Lifesaver",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Grizzly Bear",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Karsk",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Happy Skipper",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Frappé",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Iced Coffee",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Iced Coffee Fillip",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Masala Chai",
    timing: "",
    tastes: ["Spicy"],
    preparation: "",
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
          custom: 3,
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
  },
  {
    name: "Melya",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Spiking Coffee",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Thai Coffee",
    timing: "",
    tastes: ["Spicy", "Sweet"],
    preparation: "",
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
  },
  {
    name: "Thai Iced Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Thai Iced Tea",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Absinthe #2",
    timing: "",
    tastes: ["Bitter sweet", "Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Amaretto Liqueur",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
          custom: 2,
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
  },
  {
    name: "Angelica Liqueur",
    timing: "",
    tastes: ["Herbal", "Floral"],
    preparation: "",
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
  },
  {
    name: "Caribbean Orange Liqueur",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Coffee Liqueur",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Coffee-vodka",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Cranberry Cordial",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Creme De Menthe",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Irish Cream",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Scottish Highland Liqueur",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
  },
  {
    name: "Tia-maria",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Aloha Fruit Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Apple Cider Punch",
    timing: "",
    tastes: ["Sweet", "Tart"],
    preparation: "",
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
  },
  {
    name: "Artillery Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Berry Deadly",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Cranberry Punch",
    timing: "",
    tastes: ["Sweet", "Tart"],
    preparation: "",
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
  },
  {
    name: "Egg Nog #4",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
    ingredients: [
      {
        name: "Egg Yolk",
        amount: {
          custom: 6,
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
          custom: 6,
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
  },
  {
    name: "Egg-nog - Classic Cooked",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
    ingredients: [
      {
        name: "Egg",
        amount: {
          custom: 6,
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
  },
  {
    name: "Egg Nog - Healthy",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Gluehwein",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Cloves",
        amount: {
          custom: 3,
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: "1 tblsp",
        },
      },
    ],
  },
  {
    name: "Holloween Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Mulled Wine",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    preparation: "",
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
          custom: 12,
        },
      },
      {
        name: "Cinnamon",
        amount: {
          custom: 2,
        },
      },
      {
        name: "Lemon Peel",
        amount: {
          custom: 1,
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
  },
  {
    name: "Sangria",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Sweet Sangria",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Sangria the Best",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Spiced Peach Punch",
    timing: "",
    tastes: ["Sweet", "Spicy", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Strawberry Lemonade",
    timing: "",
    tastes: ["Sweet", "Tart", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Sunny Holiday Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 1,
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
  },
  {
    name: "Wine Cooler",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Wine Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 2,
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
          custom: 3,
        },
      },
      {
        name: "Pineapple Juice",
        amount: {
          custom: "1 cup",
        },
      },
    ],
  },
  {
    name: "Bruce's Puce",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    preparation: "",
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
  },
  {
    name: "Brave Bull Shooter",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Fahrenheit 5000",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Popped Cherry",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Atomic Lokade",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Diesel",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Afternoon",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Kool-aid Shot",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "National Aquarium",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Damned If You Do",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Long Vodka",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 4,
        },
      },
    ],
  },
  {
    name: "Quick F**k",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Owen's Grandmother's Revenge",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Flaming Dr. Pepper",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "New York Lemonade",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Caipirissima",
    timing: "",
    tastes: ["Boozy", "Sour"],
    preparation: "",
    ingredients: [
      {
        name: "Lime",
        amount: {
          custom: 2,
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
  },
  {
    name: "Pisco Sour",
    timing: "",
    tastes: ["Sour", "Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Egg White",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Big Red",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Black & Tan",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Chocolate Milk",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "B-53",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Sea Breeze",
    timing: "",
    tastes: ["Fresh", "Sour"],
    preparation: "",
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
  },
  {
    name: "Snake Bite (uk)",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Bob Marley",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Brainteaser",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Atlantic Sun",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Green Goblin",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Oreo Mudslide",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Abc",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Pink Panty Pulldowns",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Ice Pick",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "410 Gone",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Tequila Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Screaming Orgasm",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Flander's Flake-out",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Apple Slammer",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Amaretto Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Cuba Libra",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Jelly Bean",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "After Five",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Midnight Manx",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Kir Royale",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Jackhammer",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Nutty Irishman",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
  },
  {
    name: "3 Wise Men",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Miami Vice",
    timing: "",
    tastes: ["Sweet", "Creamy", "Fruity"],
    preparation: "",
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
  },
  {
    name: "At&t",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "69 Special",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Irish Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "57 Chevy With A White License Plate",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Mother's Milk",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Zippy's Revenge",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Belgian Blue",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Red Snapper",
    timing: "",
    tastes: ["Sour", "Spicy"],
    preparation: "",
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
  },
  {
    name: "Jamaica Kiss",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Absolut Summertime",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Cosmopolitan Martini",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Ziemes Martini Apfelsaft",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Vodka Martini",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Cafe Savoy",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Snowball",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Mocha-berry",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "747",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Addison Special",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "California Root Beer",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Amaretto Stone Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Blind Russian",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Absolut Sex",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Aztec Punch",
    timing: "",
    tastes: ["Sweet", "Spicy", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Lemon Drop",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Absolut Limousine",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Absolut Evergreen",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Lunch Box",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Kool-aid Slammer",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Kurant Tea",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Dirty Nipple",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Darkwood Sling",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Bailey's Dream Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Bumble Bee",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "A.d.m. (after Dinner Mint)",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "A Splash of Nash",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Amaretto Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Arizona Stingers",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
    ingredients: [
      {
        name: "Absolut Vodka",
        amount: {
          shots: "2",
        },
      },
      {
        name: "Iced Tea",
        amount: {
          custom: "12 oz lemon",
        },
      },
    ],
  },
  {
    name: "Orange Push-up",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "151 Florida Bushwacker",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Zizi Coin-coin",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "50/50",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Tequila Surprise",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Cream Soda",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Acid",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Arctic Fish",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Grim Reaper",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Freddy Kruger",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Bubble Gum",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Kiwi Lemon",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Hot Creamy Bush",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Midnight Mint",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Talos Coffee",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Zinger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
    ingredients: [
      {
        name: "Peachtree Schnapps",
        amount: {
          shots: "4",
        },
      },
      {
        name: "Surge",
        amount: {
          shots: "4",
        },
      },
    ],
  },
  {
    name: "Jello Shots",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Rum Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Turkeyball",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Absolutely Cranberry Smash",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Kiss Me Quick",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Royal Flush",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Limona Corona",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Pysch Vitamin Light",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Apello",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Texas Rattlesnake",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "After Sex",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "San Francisco",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Amaretto Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "A Day At the Beach",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Malibu Twister",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Space Odyssey",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Zenmeister",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Avalon",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "252",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "3-mile Long Island Iced Tea",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Zorro",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Orange Crush",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "155 Belmont",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          shots: "2",
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
  },
  {
    name: "Vodka Russian",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Danbooka",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "110 In the Shade",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Grand Blue",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Baby Eskimo",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Tennesee Mud",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Swedish Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Adam Sunrise",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Absolut Stress #2",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Chocolate Monkey",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
          shots: "2",
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
          custom: 1,
        },
      },
      {
        name: "Cherry",
        amount: {
          custom: 1,
        },
      },
      {
        name: "Banana",
        amount: {
          custom: "1 piece",
        },
      },
    ],
  },
  {
    name: "Texas Sling",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "A Midsummernight Dream",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 5,
        },
      },
      {
        name: "Schweppes Russchian",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Zoksel",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Fuzzy Asshole",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Quick-sand",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Snakebite and Black",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Zimadori Zinger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Herbal Flame",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
    ingredients: [
      {
        name: "Hot Damn",
        amount: {
          shots: "5",
        },
      },
      {
        name: "Tea",
        amount: {
          custom: "very sweet",
        },
      },
    ],
  },
  {
    name: "Jamaican Coffee",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Mojito Extra",
    timing: "",
    tastes: ["Sweet", "Sour", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Apricot Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "B-52",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Zambeer",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Americano",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Black Forest Shake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Gg",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
    ingredients: [
      {
        name: "Galliano",
        amount: {
          shots: "2 1/2",
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
  },
  {
    name: "Radler",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Mudslinger",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
  },
  {
    name: "Campari Beer",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Almond Chocolate Coffee",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
  },
  {
    name: "Amaretto Stone Sour Alternative",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "9 1/2 Weeks",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Absolutly Screwed Up",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Whitecap Margarita",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Bellini Martini",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Jitterbug",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Moranguito",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Amaretto Sweet & Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Rum Runner",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "H.d.",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "The Evil Blue Thing",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Shark Attack",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Jack's Vanilla Coke",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Apple Grande",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Bleeding Surgeon",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Applejack",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Adam Bomb",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Arizona Antifreeze",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Black and Brown",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "A Piece of Ass",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Avalanche",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Brandon and Will's Coke Float",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Flaming Lamborghini",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Zipperhead",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "A Gilligan's Island",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Kioki Coffee",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Apple Pie With A Crust",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Zorbatini",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Vodka Fizz",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Radioactive Long Island Iced Tea",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Shot-gun",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Bible Belt",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Irish Curdling Cow",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Sweet Tooth",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
    ingredients: [
      {
        name: "Godiva Liqueur",
        amount: {
          shots: "2",
        },
      },
      {
        name: "Milk",
        amount: {
          custom: "",
        },
      },
    ],
  },
  {
    name: "Downshift",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          shots: "2",
        },
      },
      {
        name: "151 Proof Rum",
        amount: {
          custom: "float bacardi",
        },
      },
    ],
  },
  {
    name: "Pink Penocha",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Orange Whip",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Bruised Heart",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Gideon's Green Dinosaur",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "A True Amaretto Sour",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Kool First Aid",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Irish Russian",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Auburn Headbanger",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Zima Blaster",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Buccaneer",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
    ingredients: [
      {
        name: "Corona",
        amount: {
          custom: 1,
        },
      },
      {
        name: "Bacardi Limon",
        amount: {
          shot: "1",
        },
      },
    ],
  },
  {
    name: "Homemade Kahlua",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "24k Nightmare",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Caribbean Boilermaker",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Army Special",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Arizona Twister",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Baby Guinness",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Alice In Wonderland",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "501 Blue",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Coke and Drops",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Ruby Tuesday",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Arctic Mouthwash",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Brain Fart",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Royal Bitch",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Citrus Coke",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Smut",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Raspberry Cooler",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Amaretto Sunset",
    timing: "",
    tastes: ["Sweet", "Nutty"],
    preparation: "",
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
          shots: "3",
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
  },
  {
    name: "Cherry Electric Lemonade",
    timing: "",
    tastes: ["Sweet", "Sour", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Girl From Ipanema",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Ipamena",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Dark Caipirinha",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Cachaca",
        amount: {
          oz: "2 1/2",
        },
      },
    ],
  },
  {
    name: "Jam Donut",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Aviation",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Dirty Martini",
    timing: "",
    tastes: ["Salty"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Duchamp's Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Bacardi Cocktail",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Between the Sheets",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Casino",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Clover Club",
    timing: "",
    tastes: ["Sweet", "Tart"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Derby",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Mary Pickford",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Monkey Gland",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Paradise",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Planter's Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Porto Flip",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Stinger",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "White Lady",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Bellini",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Cosmopolitan",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "French 75",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Maraschino Cherry",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "French Connection",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Golden Dream",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Grasshopper",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Hemingway Special",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Horse's Neck",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Kir",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Long Island Iced Tea",
    timing: "",
    tastes: ["Sweet", "Boozy"],
    preparation: "",
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
  },
  {
    name: "Mimosa",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Mint Julep",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Pina Colada",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Rose",
    timing: "",
    tastes: ["Floral"],
    preparation: "",
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
  },
  {
    name: "Barracuda",
    timing: "",
    tastes: ["Sweet", "Herbal"],
    preparation: "",
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
  },
  {
    name: "Bramble",
    timing: "",
    tastes: ["Sweet", "Tart"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Dark and Stormy",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Espresso Martini",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
        name: "Sugar Syrup",
        amount: {
          custom: "1 dash",
        },
      },
    ],
  },
  {
    name: "French Martini",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Russian Spring Punch",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Spritz",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Tommy's Margarita",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Vampiro",
    timing: "",
    tastes: ["Sweet", "Spicy"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Vesper",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Yellow Bird",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Butter Baby",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "Boozy Snickers Milkshake",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
          custom: 15,
        },
      },
    ],
  },
  {
    name: "A1",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Abbey Martini",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
    ingredients: [
      {
        name: "Gin",
        amount: {
          shots: "2",
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
  },
  {
    name: "Absolutely Fabulous",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          shots: "2",
        },
      },
      {
        name: "Champagne",
        amount: {
          custom: "top up with",
        },
      },
    ],
  },
  {
    name: "Ace",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
    ingredients: [
      {
        name: "Gin",
        amount: {
          shots: "2",
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
  },
  {
    name: "Adam & Eve",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Addington",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
    ingredients: [
      {
        name: "Sweet Vermouth",
        amount: {
          shots: "2",
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
  },
  {
    name: "Addison",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Adios Amigos Cocktail",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
        name: "Sugar Syrup",
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
  },
  {
    name: "Gin Rickey",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
  },
  {
    name: "Salted Toffee Martini",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Hunter's Moon",
    timing: "",
    tastes: ["Sweet", "Tart"],
    preparation: "",
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
        name: "Sugar Syrup",
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
          custom: 2,
        },
      },
    ],
  },
  {
    name: "Zombie",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Bombay Cassis",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Ginger",
        amount: {
          custom: "1 long strip",
        },
      },
    ],
  },
  {
    name: "Rosemary Blue",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Empellón Cocina's Fat-washed Mezcal",
    timing: "",
    tastes: ["Smoky"],
    preparation: "",
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
  },
  {
    name: "The Last Word",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "French Negroni",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Pegu Club",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Corpse Reviver",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Boulevardier",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Greyhound",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
  },
  {
    name: "Paloma",
    timing: "",
    tastes: ["Sweet", "Sour"],
    preparation: "",
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
  },
  {
    name: "Bijou",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Gimlet",
    timing: "",
    tastes: ["Sour"],
    preparation: "",
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
        name: "Sugar Syrup",
        amount: {
          oz: "1/2",
        },
      },
      {
        name: "Lime",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Martinez 2",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Oatmeal Cookie",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Bahama Mama",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "Blue Hurricane",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
  },
  {
    name: "The Laverstoke",
    timing: "",
    tastes: ["Herbal"],
    preparation: "",
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
  },
  {
    name: "Brigadier",
    timing: "",
    tastes: ["Sweet", "Creamy"],
    preparation: "",
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
  },
  {
    name: "The Jimmy Conway",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Old Pal",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Tipperary",
    timing: "",
    tastes: ["Herbal", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Penicillin",
    timing: "",
    tastes: ["Smoky"],
    preparation: "",
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
  },
  {
    name: "Corn N Oil",
    timing: "",
    tastes: ["Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "A Furlong Too Late",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "A Night In Old Mandalay",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "A. J.",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Abbey Cocktail",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Abilene",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Acapulco",
    timing: "",
    tastes: ["Sweet", "Fruity"],
    preparation: "",
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
          custom: 1,
        },
      },
      {
        name: "Mint",
        amount: {
          custom: 1,
        },
      },
    ],
  },
  {
    name: "Adam",
    timing: "",
    tastes: ["Sweet"],
    preparation: "",
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
  },
  {
    name: "Adonis Cocktail",
    timing: "",
    tastes: ["Sweet", "Bitter sweet"],
    preparation: "",
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
  },
  {
    name: "Affair",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
  {
    name: "Affinity",
    timing: "",
    tastes: ["Boozy"],
    preparation: "",
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
  },
];
