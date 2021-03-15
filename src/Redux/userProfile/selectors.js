const substateSelector = (state) => state.userProfile;

export const selectUserProfile = (state) => substateSelector(state);
export const selectUserName = (state) => substateSelector(state).fullName;
