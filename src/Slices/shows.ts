import { createSlice, type PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import type { Show } from "../Models/shows";


const showsAdapter = createEntityAdapter<Show>();

const initialState = showsAdapter.getInitialState({
    query_shows: {} as { [query: string]: number[] },
    query: "",
    loading: false,
});

export type State = typeof initialState;

const queryChange = (state: State, action: PayloadAction<string>) => {
    state.query = action.payload;
    state.loading = true;
}

const listLoaded = (state: State, action: PayloadAction<Show[]>) => {
    const shows = action.payload;
    state.query_shows[state.query] = shows.map(show => show.id);
    state.loading = false;
    showsAdapter.addMany(state, action);
}

const loadDetail = (state: State, _action: PayloadAction<number>) => {
    state.loading = true;
}

const detailLoaded = (state: State, action: PayloadAction<Show>) => {
    showsAdapter.addOne(state, action.payload);
    state.loading = false;
}

const detailError = (state: State) => {
    state.loading = false;
}

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        queryChange,
        listLoaded,
        loadDetail,
        detailLoaded,
        detailError,
    },
});

const { actions, reducer } = showsSlice;

export const {
    queryChange: queryChangeAction,
    listLoaded: listLoadedAction,
    loadDetail: loadDetailAction,
    detailLoaded: detailLoadedAction,
    detailError: detailErrorAction,
} = actions;

export default reducer;