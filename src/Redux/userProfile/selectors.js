const substateSelector = (state) => state.userProfile;

export const selectUserProfile = (state) => substateSelector(state);
export const selectUserName = (state) => substateSelector(state).fullName;
export const selectUserEmail = (state) => substateSelector(state).email;
export const selectCitySelected = (state) =>
  substateSelector(state).cities.find((city) => city.selected === true).title;
export const selectCityOptions = (state) =>
  substateSelector(state)
    .cities.filter((city) => city.selected === false)
    .map((city) => city.title);
