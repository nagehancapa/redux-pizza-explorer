export type Pizza = {
  id: number;
  name: string;
  description: string;
  bought: number;
  image: string;
};

export type PizzasState = {
  allPizzas: Pizza[];
};

export type PizzasAction = {
  type: "pizzas/add";
  payload: any;
};
