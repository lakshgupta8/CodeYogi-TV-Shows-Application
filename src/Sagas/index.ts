import createSagaMiddleware from "redux-saga";
import { debounce, takeEvery } from "redux-saga/effects";
import { LOAD_SHOW_DETAIL, QUERY_CHANGE } from "../Actions/shows";
import { fetchShowDetailSaga, fetchShowsSaga } from "./shows";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield debounce(300, QUERY_CHANGE, fetchShowsSaga);
    yield takeEvery(LOAD_SHOW_DETAIL, fetchShowDetailSaga);
}
