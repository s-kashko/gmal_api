import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ThunkMiddleware from "redux-thunk";
import appReducer from "./app/reducer";
import errorsReducer from "./errors/reducer";

const storeReducer = combineReducers({
  app: appReducer,
  errors: errorsReducer,
});

const store = createStore(
  storeReducer,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export default store;
