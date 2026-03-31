import { type Action } from "../Actions";
import { produce } from "immer";
import { SHOWS_LOADED } from "../Actions/shows";
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
  if (action.type === SHOWS_LOADED) {
    return produce(state, (draft) => {
      const shows = action.payload.shows as Show[];
      const query = action.payload.query as string;

      const showsSchema = new schema.Entity("shows");
      const normalizedData = normalize(shows, [showsSchema]);

      draft.shows = { ...draft.shows, ...normalizedData.entities.shows };
      draft.query = query;
    });
  }
  return state;
};

export default showsReducer;
