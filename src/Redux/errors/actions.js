import { SET_ERROR, RESET_ERROR } from "./constants";

export const setErrorAC = (error) => ({ type: SET_ERROR, error: error });
export const resetErrorAC = () => ({ type: RESET_ERROR });
