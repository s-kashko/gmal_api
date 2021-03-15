import { api } from "../../API/api";
import { setErrorAC } from "../errors/actions";
import {
  getMessages,
  getMessagesSuccess,
  setMessagesData,
  setMessagesIds,
} from "./actions";

export const getMessagesThunk = (accessToken, userId, str, type) => async (dispatch) => {
  try {
    dispatch(getMessages());

    const response = await api.getAllMessages(accessToken, userId, str, type);
    const messagesArr = response.data.messages;
    dispatch(setMessagesIds(messagesArr));
    
    let requests = messagesArr.map(message => api.getFullMessage(accessToken, userId, message.id));
    
    Promise.all(requests).then(responses => {
      const messages = responses.map(response => response.data);
      dispatch(setMessagesData(messages));
      dispatch(getMessagesSuccess());
    });
  } catch (err) {
    dispatch(setErrorAC(err.message));
    dispatch(setMessagesData([]));
    dispatch(getMessagesSuccess());
    console.log("$$error: ", err);
  } 
};
