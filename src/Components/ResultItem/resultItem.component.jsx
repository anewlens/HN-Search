import React from 'react'
import ResultItemStory from './ResultItem-story.component'
import ResultItemComment from './ResultItem-comment.component'
import './resultItem.styles.scss'

const ResultItem = ({ result }) => { 
    if (result._tags.includes('story')) {
        return <ResultItemStory result={result}/>
    } else if (result._tags.includes('comment')) {
        return <ResultItemComment result={result}/>
    } else return null
}

export default ResultItem