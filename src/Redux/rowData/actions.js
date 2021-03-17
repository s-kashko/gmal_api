import {
  GET_MESSAGES,
  SET_MESSAGES,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
  GET_MESSAGES_SUCCESS,
  SET_MSG_IDS_ARRAY,
  CHANGE_SEARCH_INPUT,
  SET_NEXT_PAGE_TOKEN,
  SET_LABEL,
  SET_PAGES_COUNT,
  SET_CURR_PAGE_NULL,
} from "./constants";

export const getMessages = () => ({ type: GET_MESSAGES });

export const setMessagesIds = (mgsIdsArray) => ({
  type: SET_MSG_IDS_ARRAY,
  mgsIdsArray,
});

export const setMessagesData = (messagesData) => ({
  type: SET_MESSAGES,
  messagesData,
});

export const getMessagesSuccess = () => ({ type: GET_MESSAGES_SUCCESS });

export const changeSearchInput = (searchInput) => ({
  type: CHANGE_SEARCH_INPUT,
  searchInput,
});

export const setNextPageToken = (nextPageToken) => ({
  type: SET_NEXT_PAGE_TOKEN,
  nextPageToken,
});

export const setNextPage = () => ({ type: SET_NEXT_PAGE });
export const setPrevPage = () => ({ type: SET_PREV_PAGE });
export const setCurrPageNull = () => ({ type: SET_CURR_PAGE_NULL });

export const setLabel = (label) => ({ type: SET_LABEL, label });

export const setPagesCount = (pagesCount) => ({
  type: SET_PAGES_COUNT,
  pagesCount,
});
