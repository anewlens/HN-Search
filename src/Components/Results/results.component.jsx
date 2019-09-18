import React from 'react'

import './results.styles.scss'
import ResultItem from '../ResultItem/resultItem.component'

const Results = () => {

    return (
        <section className="results">
            <h2 className="results-title">Results</h2>
            <div className="results-list">
                <ResultItem />
            </div>
        </section>
    )
}

export default Results