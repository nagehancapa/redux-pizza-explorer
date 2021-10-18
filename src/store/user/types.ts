export type UserState = {
  name: string;
  id: number;
  favorites: number[];
};

export type UserAction = {
  type: "user/toggleFavorite";
  payload: number;
};
