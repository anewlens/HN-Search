import ResultsActionTypes from './types.results'

const INITIAL_STATE = null

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ResultsActionTypes.SET_RESULTS:
            return action.payload
    
        default:
            return state
    }
}

export default resultsReducer