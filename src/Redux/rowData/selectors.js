const substateSelector = (state) => state.rowData;

export const selectLoading = (state) => substateSelector(state).loading;
export const selectMessages = (state) => substateSelector(state).messages;
export const selectSearchInput = (state) => substateSelector(state).searchInput;
