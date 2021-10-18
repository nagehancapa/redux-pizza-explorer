import { UserAction } from "./types";

export const toggleFavorite = (favoriteId: number): UserAction => ({
  type: "user/toggleFavorite",
  payload: favoriteId,
});
