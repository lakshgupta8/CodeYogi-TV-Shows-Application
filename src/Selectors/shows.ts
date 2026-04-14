import { createSelector } from "reselect";
import type { State } from "../store";

const showsStateSelector = (state: State) => state.shows;

export const showsMapSelector = createSelector(
    showsStateSelector,
    (state) => state.shows
);

export const queryShowsMapSelector = createSelector(
    showsStateSelector,
    (state) => state.query_shows
);

export const querySelector = createSelector(
    showsStateSelector,
    (state) => state.query
);

export const showsSelector = createSelector(
    showsMapSelector,
    querySelector,
    queryShowsMapSelector,
    (showsMap, query, queryShowsMap) =>
        queryShowsMap[query]?.map((showId) => showsMap[showId]) || []
);

export const showsLoadingSelector = createSelector(
    showsStateSelector,
    (state) => state.loading
);

export const showDetailSelector = (showId: number) => createSelector(
    showsMapSelector,
    (showsMap) => showsMap[showId]
);