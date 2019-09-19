import HistoryActionTypes from "./types.history";

export const addQuery = query => ({
    type: HistoryActionTypes.ADD_QUERY,
    payload: query
})