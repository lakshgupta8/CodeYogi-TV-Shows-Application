import { applyMiddleware, combineReducers, createStore } from "redux";
import showsReducer from "./Reducers/shows";
import { sagaMiddleware, rootSaga } from "./Sagas";
import { composeWithDevTools } from "@redux-devtools/extension";

const reducer = combineReducers({
    shows: showsReducer,
});

export type State = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;