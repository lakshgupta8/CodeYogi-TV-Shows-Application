import type { Show } from "../Models/shows";
import type { ActionCreator } from ".";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const showsLoadedAction: ActionCreator<Show[]> = (shows: Show[]) => ({
    type: SHOWS_LOADED,
    payload: shows
});

export const QUERY_CHANGE = "QUERY_CHANGE";

export const queryChangeAction: ActionCreator<string> = (query: string) => ({
    type: QUERY_CHANGE,
    payload: query
});

export const SHOW_DETAIL_LOADED = "SHOW_DETAIL_LOADED";

export const showDetailLoadedAction: ActionCreator<Show> = (show: Show) => ({
    type: SHOW_DETAIL_LOADED,
    payload: show
});

export const SHOW_DETAIL_ERROR = "SHOW_DETAIL_ERROR";

export const showDetailErrorAction: ActionCreator<{ showId: number, error: string }> = (showId: number, error: string) => ({
    type: SHOW_DETAIL_ERROR,
    payload: { showId, error }
});

export const LOAD_SHOW_DETAIL = "LOAD_SHOW_DETAIL";

export const loadShowDetailAction: ActionCreator<number> = (showId: number) => ({
    type: LOAD_SHOW_DETAIL,
    payload: showId
});
