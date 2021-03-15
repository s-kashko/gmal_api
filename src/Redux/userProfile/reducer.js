import { SET_USER_PROFILE } from "./constants";

const initialState = {};

const userProfileReducer = (state = initialState, action) => {
  const { type, profile } = action;

  switch (type) {
    case SET_USER_PROFILE:
      return { ...state, ...profile };

    default:
      return state;
  }
};

export default userProfileReducer;
