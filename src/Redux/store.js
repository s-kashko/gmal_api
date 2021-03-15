import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
import userProfileReducer from "./userProfile/reducer";
import rowDataReducer from "./rowData/reducer";
import errorsReducer from "./errors/reducer";

const storeReducer = combineReducers({
  userProfile: userProfileReducer,
  rowData: rowDataReducer,
  errors: errorsReducer,
});

const store = createStore(
  storeReducer,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export default store;
