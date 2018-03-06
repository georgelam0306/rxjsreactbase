import reducers from "../reducers";
import epics from "../epics";

import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(epics);
const reduxStore = composeEnhancers(applyMiddleware(epicMiddleware))(
  createStore
)(reducers);

export default {
  store: reduxStore
};
