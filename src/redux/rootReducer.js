import { combineReducers } from 'redux'
import resultsReducer from './results/reducer.results'
import historyReducer from './history/reducer.history'

const rootReducer = combineReducers({
    results: resultsReducer,
    history: historyReducer
})

export default rootReducer