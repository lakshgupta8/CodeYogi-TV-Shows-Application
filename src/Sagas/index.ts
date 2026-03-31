import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { QUERY_CHANGE } from "../Actions/shows";
import { showsSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeLatest(
        QUERY_CHANGE,
        showsSaga,
    );
}