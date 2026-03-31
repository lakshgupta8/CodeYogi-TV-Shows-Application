import { combineReducers, createStore } from "redux";
import showsReducer from "./Reducers/shows";

const reducer = combineReducers({
    shows: showsReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;