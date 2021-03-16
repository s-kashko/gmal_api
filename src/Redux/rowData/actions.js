import {
  GET_MESSAGES,
  SET_MESSAGES,
  SET_LOADING,
  GET_MESSAGES_SUCCESS,
  SET_MSG_IDS_ARRAY,
  CHANGE_SEARCH_INPUT,
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
