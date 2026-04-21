import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import { fetchShowDetailSaga, fetchShowsSaga } from "./Sagas/shows";
import { configureStore } from "@reduxjs/toolkit";
import reducer, { queryChangeAction, loadDetailAction } from "./Slices/shows";

export function* rootSaga() {
    yield debounce(300, queryChangeAction, fetchShowsSaga);
    yield takeEvery(loadDetailAction, fetchShowDetailSaga);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        shows: reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;