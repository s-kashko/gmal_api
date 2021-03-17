import Axios from "axios";

const instance = Axios.create({
  baseURL: " https://content.googleapis.com",
  headers: {
    Authorization:
      "Bearerya29.GlwWBH0K6aRweeu8kZKbOTEPhWTMG73iXWU-dYEmskOEPFqymIOvtDgkR78UaKAnPZeo3wKIIfYisVN3KDtMr-Qrh4S67zNdkHQD0GZAAuB0PY3Jg82LZmTMJpAZNQ",
  },
});

export const maxResults = 5;

export const api = {
  getAllMessages(
    accessToken,
    userId,
    str = "",
    type = "INBOX",
    pageToken = "",
    allMessages
  ) {
    return instance.get(
      `/gmail/v1/users/${userId}/messages?labelIds=${type}${
        allMessages ? "" : `&maxResults=${maxResults}`
      }&pageToken=${pageToken}&access_token=${accessToken}&q=${str}`
    );
  },

  getFullMessage(accessToken, userId, messageId) {
    return instance.get(
      `/gmail/v1/users/${userId}/messages/${messageId}?access_token=${accessToken}`
    );
  },
};
