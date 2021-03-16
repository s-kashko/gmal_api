import { SELECT_CITY, SET_USER_PROFILE } from "./constants";

const initialState = {
  cities: [
    { title: "New York", selected: true },
    { title: "Moskow", selected: false },
    { title: "Minsk", selected: false },
    { title: "Tokio", selected: false },
    { title: "Barselona", selected: false },
  ],
};

const userProfileReducer = (state = initialState, action) => {
  const { type, profile, selectedCity } = action;

  switch (type) {
    case SET_USER_PROFILE:
      return { ...state, ...profile };

    case SELECT_CITY:
      return {
        ...state,
        cities: [
          { title: selectedCity, selected: true },
          ...state.cities
            .filter((city) => city.title !== selectedCity)
            .map((city) => ({ title: city.title, selected: false })),
        ],
      };

    default:
      return state;
  }
};

export default userProfileReducer;
