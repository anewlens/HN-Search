import HistoryActionTypes from "./types.history";

const INITIAL_STATE = []

const historyReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case HistoryActionTypes.ADD_QUERY:
            return [...state, action.payload]
    
        default:
            return state
    }
}

export default historyReducer