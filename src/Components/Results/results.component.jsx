import React from 'react'
import { useSelector } from 'react-redux'

import './results.styles.scss'
import ResultItem from '../ResultItem/resultItem.component'

const Results = () => {

    const results = useSelector(state => state.results)

    return (
        <section className="results">
            <h2 className="results-title">Results</h2>

            <div className="results-list">
                {
                    !results
                    ? <p className="error">Search above.</p>
                    : (results.hits.length !== 0)  
                    ? results.hits.map(result => <ResultItem result={result}/>)
                    : <p className="error">No results for "{results.query}"</p>
                }
            </div>

        </section>
    )
}

export default Results