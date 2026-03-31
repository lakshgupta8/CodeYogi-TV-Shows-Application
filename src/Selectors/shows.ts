import { createSelector } from "reselect";
import type { State } from "../store";

const showsStateSelector = (state: State) => state.shows;

export const showsMapSelector = createSelector(
    showsStateSelector,
    (state) => state.shows
);

export const showsSelector = createSelector(
    showsMapSelector,
    (showsMap) => Object.keys(showsMap).map((showId) => showsMap[+showId])
);

export const querySelector = createSelector(
    showsStateSelector,
    (state) => state.query
);