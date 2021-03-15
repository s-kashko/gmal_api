import { api } from "../../api/api";
import { setErrorAC } from "../errors/actions";
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
    dispatch(setErrorAC(err.message));
    console.log("$$error: ", err);
    dispatch(getMessagesSuccess());
  } finally {
    dispatch(getMessagesSuccess());
  }
};
