import { api } from "../../API/api";
import {
  getMessages,
  getMessagesSuccess,
  setMessageData,
  setMessagesIds,
} from "./actions";

export const getMessagesThunk = () => async (dispatch) => {
  try {
    dispatch(getMessages());

    const response = await api.getAllMessages();
    const messagesArr = response.data.messages;

    dispatch(setMessagesIds(messagesArr));
    console.log("$$messages: ", messagesArr);

    messagesArr.forEach(async ({ id }) => {
      const response = await api.getFullMessage(id);
      dispatch(setMessageData(response.data));
      console.log("$$full response: ", response.data);
    });

    dispatch(getMessagesSuccess());
  } catch (err) {
    console.log("$$error: ", err);
  }
};
