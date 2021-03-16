import { SET_USER_PROFILE } from "./constants";
import { SELECT_CITY } from "./constants";

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const selectCity = (selectedCity) => ({
  type: SELECT_CITY,
  selectedCity,
});
