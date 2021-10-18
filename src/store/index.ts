// src/store/index.ts
import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";
import pizzasReducer from "./pizzas/reducer";
import restaurantsReducer from "./restaurants/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  pizzas: pizzasReducer,
  restaurants: restaurantsReducer,
});

const enhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const store = createStore(rootReducer, enhancer);

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
