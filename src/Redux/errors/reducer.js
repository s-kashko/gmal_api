import { SET_ERROR, RESET_ERROR } from "./constants";

const initialState = [];

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return [...state, action.error];

    case RESET_ERROR:
      return state.filter((el, index) => index !== 0);

    default:
      return state;
  }
};

export default errorsReducer;
