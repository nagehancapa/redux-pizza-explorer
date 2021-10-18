export type Restaurant = {
  id: number;
  name: string;
  pizzas: number[];
};

export type RestaurantsState = {
  allRestaurants: Restaurant[];
};

export type RestaurantsAction = any;
