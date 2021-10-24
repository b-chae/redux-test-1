import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import friendReducer from "../friend/state/state";
import timelineReducer from "../timeline/state";
import timelineSaga from "../timeline/state/saga";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddlerware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddlerware));

export default store;

sagaMiddlerware.run(timelineSaga);