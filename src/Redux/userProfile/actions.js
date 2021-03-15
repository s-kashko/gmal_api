import { SET_USER_PROFILE } from "./constants";

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
