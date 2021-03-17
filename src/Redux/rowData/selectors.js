const substateSelector = (state) => state.rowData;

export const selectLoading = (state) => substateSelector(state).loading;
export const selectMessages = (state) => substateSelector(state).messages;
export const selectSearchInput = (state) => substateSelector(state).searchInput;
export const selectPageTokens = (state) => substateSelector(state).pageTokens;
export const selectCurrPage = (state) => substateSelector(state).currPage;
export const selectLabel = (state) => substateSelector(state).label;
export const selectPagesCount = (state) => substateSelector(state).pagesCount;
