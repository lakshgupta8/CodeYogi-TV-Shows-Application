import { call, put } from "redux-saga/effects";
import { fetchShows } from "../api";
import { type PayloadAction } from "@reduxjs/toolkit";
import { detailLoadedAction, listLoadedAction, detailErrorAction } from "../Slices/shows";

export function* fetchShowsSaga(action: PayloadAction<string>): Generator<any, any, any> {
    const shows = yield call(fetchShows, action.payload);
    const nextAction = yield call(listLoadedAction, shows);
    yield put(nextAction);
}

export function* fetchShowDetailSaga(action: PayloadAction<number>): Generator<any, any, any> {
    try {
        const showId = action.payload;
        const shows = yield call(fetchShows, showId);
        const show = shows[0];

        if (!show || !show.id) {
            yield put(detailErrorAction());
            return;
        }

        const nextAction = yield call(detailLoadedAction, show);
        yield put(nextAction);
    } catch (error) {
        yield put(detailErrorAction());
    }
}