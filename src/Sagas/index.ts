import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { LOAD_SHOW_DETAIL, QUERY_CHANGE } from "../Actions/shows";
import { fetchShowDetailSaga, showsSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield takeLatest(QUERY_CHANGE, showsSaga);
    yield takeLatest(LOAD_SHOW_DETAIL, fetchShowDetailSaga);
}