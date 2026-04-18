import { type Action } from "../Actions";
import { produce } from "immer";
import { QUERY_CHANGE, SHOWS_LOADED, SHOW_DETAIL_LOADED, LOAD_SHOW_DETAIL, SHOW_DETAIL_ERROR } from "../Actions/shows";
import type { Show } from "../Models/shows";
import { schema, normalize } from "normalizr";

export type State = {
  shows: { [showId: number]: Show };
  query_shows: { [query: string]: number[] };
  query: string;
  loading: boolean;
  show_loading: { [showId: number]: boolean };
};

const initialState = {
  shows: {},
  query_shows: {},
  query: "",
  loading: false,
  show_loading: {}
};

const showsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];

        const showsSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showsSchema]);

        draft.query_shows[draft.query] = normalizedData.result;

        draft.shows = { ...draft.shows, ...normalizedData.entities.shows };
        draft.loading = false;
      });
    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
        draft.show_loading[show.id] = false;
        draft.loading = false;
      });
    case SHOW_DETAIL_ERROR:
      return produce(state, (draft) => {
        const { showId } = action.payload;
        draft.show_loading[showId] = false;
        draft.loading = false;
      });
    case LOAD_SHOW_DETAIL:
      return produce(state, (draft) => {
        draft.show_loading[action.payload] = true;
        draft.loading = true;
      });
    case QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
        draft.loading = true;
      });
    default:
      return state;
  }
};

export default showsReducer;
