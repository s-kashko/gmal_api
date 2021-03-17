import { api } from "../../API/api";
import { setErrorAC } from "../errors/actions";
import {
  getMessages,
  getMessagesSuccess,
  setCurrPageNull,
  setLabel,
  setMessagesData,
  setMessagesIds,
  setNextPage,
  setNextPageToken,
  setPagesCount,
  setPrevPage,
} from "./actions";

import { maxResults } from "../../API/api";

import { selectUserProfile } from "../userProfile/selectors";
import {
  selectPageTokens,
  selectCurrPage,
  selectLabel,
  selectPagesCount,
} from "../rowData/selectors";

export const getMessagesThunk = (accessToken, userId, str) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(getMessages());
    const label = selectLabel(getState());

    const allMessagesResponse = await api.getAllMessages(
      accessToken,
      userId,
      str,
      label,
      "",
      true
    );

    const response = await api.getAllMessages(accessToken, userId, str, label);
    const messagesArr = response.data.messages;
    const { nextPageToken } = response.data;
    dispatch(setMessagesIds(messagesArr));
    dispatch(setNextPageToken(nextPageToken));

    const allMessagesArr = allMessagesResponse.data.messages;
    dispatch(setPagesCount(Math.ceil(allMessagesArr.length / maxResults)));

    let requests = messagesArr.map((message) =>
      api.getFullMessage(accessToken, userId, message.id)
    );

    Promise.all(requests).then((responses) => {
      const messages = responses.map((response) => response.data);
      dispatch(setMessagesData(messages));
      dispatch(getMessagesSuccess());
    });
  } catch (err) {
    dispatch(setErrorAC(err.message));
    dispatch(setMessagesData([]));
    dispatch(getMessagesSuccess());
  }
};

export const getLabeledMessages = (label) => (dispatch, getState) => {
  const { accessToken, id: userId } = selectUserProfile(getState());

  dispatch(setLabel(label));
  dispatch(setCurrPageNull());
  dispatch(getMessagesThunk(accessToken, userId, ""));
};

export const setNexPageThunk = () => async (dispatch, getState) => {
  const pagesCount = selectPagesCount(getState());
  const currPage = selectCurrPage(getState());

  if (currPage < pagesCount - 1) {
    try {
      dispatch(getMessages());
      const label = selectLabel(getState());

      const { accessToken, id: userId } = selectUserProfile(getState());
      const pageTokensArr = selectPageTokens(getState());
      const currPage = selectCurrPage(getState());

      const pageToken = pageTokensArr[currPage + 1];

      const response = await api.getAllMessages(
        accessToken,
        userId,
        "",
        label,
        pageToken
      );

      const messagesArr = response.data.messages;
      const { nextPageToken } = response.data;
      dispatch(setMessagesIds(messagesArr));
      dispatch(setNextPageToken(nextPageToken));
      dispatch(setNextPage());

      let requests = messagesArr.map((message) =>
        api.getFullMessage(accessToken, userId, message.id)
      );

      Promise.all(requests).then((responses) => {
        const messages = responses.map((response) => response.data);
        dispatch(setMessagesData(messages));
        dispatch(getMessagesSuccess());
      });
    } catch (err) {
      dispatch(setErrorAC(err.message));
      dispatch(setMessagesData([]));
      dispatch(getMessagesSuccess());
    }
  }
};

export const setPrevPageThunk = () => async (dispatch, getState) => {
  const currPage = selectCurrPage(getState());

  if (currPage > 0) {
    try {
      dispatch(getMessages());

      const { accessToken, id: userId } = selectUserProfile(getState());
      const pageTokensArr = selectPageTokens(getState());
      const label = selectLabel(getState());

      const pageToken = pageTokensArr[currPage - 1];

      const response = await api.getAllMessages(
        accessToken,
        userId,
        "",
        label,
        pageToken
      );

      const messagesArr = response.data.messages;
      dispatch(setMessagesIds(messagesArr));
      dispatch(setPrevPage());

      let requests = messagesArr.map((message) =>
        api.getFullMessage(accessToken, userId, message.id)
      );

      Promise.all(requests).then((responses) => {
        const messages = responses.map((response) => response.data);
        dispatch(setMessagesData(messages));
        dispatch(getMessagesSuccess());
      });
    } catch (err) {
      dispatch(setErrorAC(err.message));
      dispatch(setMessagesData([]));
      dispatch(getMessagesSuccess());
    }
  }
};
