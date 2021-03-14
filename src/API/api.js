import Axios from "axios";

const instance = Axios.create({
  baseURL: " https://content.googleapis.com",
  headers: {
    Authorization:
      "Bearerya29.GlwWBH0K6aRweeu8kZKbOTEPhWTMG73iXWU-dYEmskOEPFqymIOvtDgkR78UaKAnPZeo3wKIIfYisVN3KDtMr-Qrh4S67zNdkHQD0GZAAuB0PY3Jg82LZmTMJpAZNQ",
  },
});

const accessToken =
  "ya29.a0AfH6SMApCtVe_drMXGaDItaw_WsJHFKRSNQFVzATh4XJVupM1UwI5ZITPhHkiKIftBotHYvKwp6MDrrzNzaBqlB-Bg9qUNH4QgVYZLo_15M7ofnacV7_4XnWKLsUCPeWtbdeJoBQPxvA92yo8i8gyaw5SH7SlA";

const userId = "114992807645259453224";

export const api = {
  getAllMessages() {
    return instance.get(
      `/gmail/v1/users/${userId}/messages?access_token=${accessToken}`
    );
  },
  getFullMessage(messageId) {
    return instance.get(
      `/gmail/v1/users/${userId}/messages/${messageId}?access_token=${accessToken}`
    );
  },
};
