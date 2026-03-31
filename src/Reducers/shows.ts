import { type Action } from "../Actions";
import { produce } from "immer";
import { QUERY_CHANGE, SHOWS_LOADED, SHOW_DETAIL_LOADED } from "../Actions/shows";
import type { Show } from "../Models/shows";
import { schema, normalize } from "normalizr";

export type State = {
  shows: { [showId: number]: Show }
  query: string
};

const initialState = {
  shows: {},
  query: ""
};

const showsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SHOWS_LOADED:
      return produce(state, (draft) => {
        const shows = action.payload as Show[];

        const showsSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showsSchema]);

        draft.shows = normalizedData.entities.shows || {};
      });
    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const show = action.payload as Show;
        draft.shows[show.id] = show;
      });
    case QUERY_CHANGE:
      return produce(state, (draft) => {
        draft.query = action.payload;
      });
    default:
      return state;
  }
};

export default showsReducer;
