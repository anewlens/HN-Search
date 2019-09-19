import ResultsActionTypes from './types.results'

export const setResults = results => ({
    type: ResultsActionTypes.SET_RESULTS,
    payload: results
})

