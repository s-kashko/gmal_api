import {
  GET_MESSAGES,
  SET_MESSAGE,
  GET_MESSAGES_SUCCESS,
  SET_MSG_IDS_ARRAY,
} from "./constants";

export const getMessages = () => ({ type: GET_MESSAGES });
export const setMessagesIds = (mgsIdsArray) => ({
  type: SET_MSG_IDS_ARRAY,
  mgsIdsArray,
});
export const setMessageData = (messageData) => ({
  type: SET_MESSAGE,
  messageData,
});
export const getMessagesSuccess = () => ({ type: GET_MESSAGES_SUCCESS });
