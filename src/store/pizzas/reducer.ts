// src/store/pizzas/reducer.ts
import { PizzasState, PizzasAction } from "./types";

const initialState: PizzasState = {
  allPizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://img.static-rmg.be/a/food/image/q75/w640/h400/1077806/pizza.jpg",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
};

export default function reducer(state = initialState, action: PizzasAction) {
  switch (action.type) {
    case "pizzas/add": {
      return {
        ...state,
        allPizzas: [
          ...state.allPizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
            image:
              "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
}
