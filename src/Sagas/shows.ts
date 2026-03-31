import { call, put } from "redux-saga/effects";
import { fetchShowList } from "../api";
import type { Action } from "../Actions";
import { showsLoadedAction } from "../Actions/shows";

export function* showsSaga(action: Action): Generator<any, any, any> {
    const shows = yield call(fetchShowList, action.payload);
    const nextAction = yield call(showsLoadedAction, shows);
    yield put(nextAction);
}