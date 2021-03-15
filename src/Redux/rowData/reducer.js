import {
  GET_MESSAGES_SUCCESS,
  SET_MESSAGE,
  GET_MESSAGES,
  SET_MSG_IDS_ARRAY,
} from "./constants";

const initialState = {
  loading: false,
  messagesIds: [],
  messages: [],
};

const reducer = (state = initialState, action) => {
  const { type, messageData, mgsIdsArray } = action;

  switch (type) {
    case GET_MESSAGES:
      return { ...state, loading: true };

    case GET_MESSAGES_SUCCESS:
      return { ...state, loading: false };

    case SET_MSG_IDS_ARRAY:
      return { ...state, messagesIds: [...mgsIdsArray] };

    case SET_MESSAGE:
      return { ...state, messages: [...state.messages, messageData] };

    default:
      return state;
  }
};

export default reducer;