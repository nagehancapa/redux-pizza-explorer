import { UserState, UserAction } from "./types";

const initialState: UserState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const id = action.payload;

      const favorites = state.favorites.includes(id) // check if we already have it
        ? state.favorites.filter((f) => f !== id) // remove
        : [...state.favorites, id]; // add

      return {
        ...state,
        favorites,
      };
    }
    default: {
      return state;
    }
  }
}
