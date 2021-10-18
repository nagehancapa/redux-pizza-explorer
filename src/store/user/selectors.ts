import { ReduxState } from "../index";

export const selectUser = (reduxState: ReduxState) => reduxState.user;
