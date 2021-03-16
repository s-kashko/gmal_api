import {
  GET_MESSAGES_SUCCESS,
  SET_MESSAGES,
  GET_MESSAGES,
  SET_MSG_IDS_ARRAY,
  CHANGE_SEARCH_INPUT,
} from "./constants";

const initialState = {
  loading: false,
  messagesIds: [],
  messages: [],
  searchInput: "",
};

const reducer = (state = initialState, action) => {
  const { type, messagesData, mgsIdsArray, searchInput } = action;

  switch (type) {
    case GET_MESSAGES:
      return { ...state, loading: true };

    case GET_MESSAGES_SUCCESS:
      return { ...state, loading: false };

    case SET_MSG_IDS_ARRAY:
      return { ...state, messagesIds: [...mgsIdsArray] };

    case SET_MESSAGES:
      return { ...state, messages: messagesData };

    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInput };

    default:
      return state;
  }
};

export default reducer;
