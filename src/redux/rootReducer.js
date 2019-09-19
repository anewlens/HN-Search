import { combineReducers } from 'redux'
import resultsReducer from './results/reducer.results'

const rootReducer = combineReducers({
    results: resultsReducer
})

export default rootReducer