import { PizzasAction } from "./types";

export const addPizza = ({
  name,
  description,
}: {
  name: string;
  description: string;
}): PizzasAction => ({
  type: "pizzas/add",
  payload: {
    name,
    description,
    id: Math.random(),
  },
});
