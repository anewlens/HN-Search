import React from 'react'
import PropTypes from 'prop-types'
import ResultItemStory from './ResultItem-story.component'
import ResultItemComment from './ResultItem-comment.component'
import './resultItem.styles.scss'

const ResultItem = ({ result }) => { 
    if (result._tags.includes('comment')) {
        return <ResultItemComment result={result}/>
    } else {
        return <ResultItemStory result={result}/>
    } 
}

ResultItem.propTypes = {
    result: PropTypes.object.isRequired
}

export default ResultItem