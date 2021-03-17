import {
  GET_MESSAGES_SUCCESS,
  SET_MESSAGES,
  GET_MESSAGES,
  SET_MSG_IDS_ARRAY,
  CHANGE_SEARCH_INPUT,
  SET_NEXT_PAGE_TOKEN,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
  SET_LABEL,
  SET_PAGES_COUNT,
  SET_CURR_PAGE_NULL,
} from "./constants";

const initialState = {
  loading: false,
  messagesIds: [],
  messages: [],
  searchInput: "",
  currPage: 0,
  pagesCount: null,
  pageTokens: [""],
  label: "INBOX",
};

const reducer = (state = initialState, action) => {
  const {
    type,
    messagesData,
    mgsIdsArray,
    searchInput,
    nextPageToken,
    label,
    pagesCount,
  } = action;

  switch (type) {
    case GET_MESSAGES:
      return { ...state, loading: true };

    case GET_MESSAGES_SUCCESS:
      return { ...state, loading: false };

    case SET_MSG_IDS_ARRAY:
      return { ...state, messagesIds: [...mgsIdsArray] };

    case SET_MESSAGES:
      return { ...state, messages: messagesData };

    case SET_PAGES_COUNT:
      return { ...state, pagesCount };

    case SET_CURR_PAGE_NULL:
      return { ...state, currPage: 0 };

    case SET_NEXT_PAGE:
      return { ...state, currPage: state.currPage + 1 };

    case SET_PREV_PAGE:
      return { ...state, currPage: state.currPage - 1 };

    case SET_LABEL:
      return { ...state, label };

    case SET_NEXT_PAGE_TOKEN:
      return { ...state, pageTokens: [...state.pageTokens, nextPageToken] };

    case CHANGE_SEARCH_INPUT:
      return { ...state, searchInput };

    default:
      return state;
  }
};

export default reducer;
