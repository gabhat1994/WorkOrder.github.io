import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer, modalReducer } from "./reducers/reducer";
const initialState = {};

const reducer = combineReducers({
  dataReducer: dataReducer,
  modalReducer: modalReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
