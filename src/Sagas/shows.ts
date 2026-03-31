import { call, put } from "redux-saga/effects";
import { fetchShowDetail, fetchShowList } from "../api";
import type { Action } from "../Actions";
import { showDetailLoadedAction, showsLoadedAction } from "../Actions/shows";

export function* showsSaga(action: Action): Generator<any, any, any> {
    const shows = yield call(fetchShowList, action.payload);
    const nextAction = yield call(showsLoadedAction, shows);
    yield put(nextAction);
}

export function* fetchShowDetailSaga(action: Action): Generator<any, any, any> {
    const show = yield call(fetchShowDetail, action.payload);
    const nextAction = yield call(showDetailLoadedAction, show);
    yield put(nextAction);
}