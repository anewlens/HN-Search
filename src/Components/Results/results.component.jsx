import React from 'react'
import { useSelector } from 'react-redux'

import './results.styles.scss'
import ResultItem from '../ResultItem/resultItem.container'

const Results = () => {

    const results = useSelector(state => state.results)

    return (
        <section className="results">
            <h2 className="results-title">
                {results && `Results for "${results.query}"`}
            </h2>

            <div className="results-list">
                {
                    (results.hits.length === 0)
                    ? <p className="results-message">No results for "{results.query}"</p>
                    : results.hits.map(result => <ResultItem key={result.objectID} result={result}/>)
                }
            </div>

        </section>
    )
}

export default Results