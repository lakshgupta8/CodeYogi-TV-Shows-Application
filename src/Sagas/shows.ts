import { call, put } from "redux-saga/effects";
import { fetchShows } from "../api";
import type { Action } from "../Actions";
import { showDetailLoadedAction, showsLoadedAction, showDetailErrorAction } from "../Actions/shows";

export function* fetchShowsSaga(action: Action): Generator<any, any, any> {
    const shows = yield call(fetchShows, action.payload);
    const nextAction = yield call(showsLoadedAction, shows);
    yield put(nextAction);
}

export function* fetchShowDetailSaga(action: Action): Generator<any, any, any> {
    try {
        const showId = action.payload;
        const shows = yield call(fetchShows, showId);
        const show = shows[0];
        
        if (!show || !show.id) {
            yield put(showDetailErrorAction(showId, "Show not found"));
            return;
        }

        const nextAction = yield call(showDetailLoadedAction, show);
        yield put(nextAction);
    } catch (error) {
        yield put(showDetailErrorAction(action.payload, "Failed to load show details"));
    }
}