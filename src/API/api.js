import Axios from "axios";

const instance = Axios.create({
  baseURL: " https://content.googleapis.com",
  headers: {
    Authorization:
      "Bearerya29.GlwWBH0K6aRweeu8kZKbOTEPhWTMG73iXWU-dYEmskOEPFqymIOvtDgkR78UaKAnPZeo3wKIIfYisVN3KDtMr-Qrh4S67zNdkHQD0GZAAuB0PY3Jg82LZmTMJpAZNQ",
  },
});

const accessToken =
  "ya29.a0AfH6SMC6xFY9jWm0YvHaOZ2j_v5BIRboB817L083n4AnGUYh7RpbmhaPUmIlhJSm6dIeQPEnbcCU2DYT6X0Il8x3UUfwi7pq8MfebQFEk_H-FnUeBmHZkxsIRs-5aV14VKUdNycY0LzCn5g2A_6DhcQjUKUtbw";

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
