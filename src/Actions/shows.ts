import type { Show } from "../Models/shows";
import type { ActionCreator } from ".";

export const SHOWS_LOADED = "SHOWS_LOADED";

export const showsLoadedAction: ActionCreator<Show[]> = (shows: Show[]) => {
    return {
        type: SHOWS_LOADED,
        payload: shows
    }
}

export const QUERY_CHANGE = "QUERY_CHANGE";

export const queryChangeAction: ActionCreator<string> = (query: string) => {
    return {
        type: QUERY_CHANGE,
        payload: query
    }
}