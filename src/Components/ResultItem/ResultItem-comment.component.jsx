import React from 'react'
import PropTypes from 'prop-types'

const ResultItemComment = ({ result: { story_title, story_url, url, author, created_at, points, comment_text, objectID }}) => {

    const shortendComment = comment_text.substring(0, 240).concat('...')

    return (
        <div className="resultItem" >
            <a href={url || story_url} target='_blank' rel="noopener noreferrer" className="resultItem-storyLink">
                <h3 className="resultItem-heading">{author} commented on <em>{story_title}</em>:</h3>
            </a>
            <a href={`https://news.ycombinator.com/item?id=${objectID}`} target='_blank' rel="noopener noreferrer" className="resultItem-hnLink" dangerouslySetInnerHTML={{__html: shortendComment}} />
            <footer className="resultItem-footer">
                <p className="resultItem-points">{points ? points : '0'} points</p>
                <p className="resultItem-date">{new Date(created_at).toDateString()}</p>
            </footer>
        </div>
    )
}

ResultItemComment.propTypes = {
    result: PropTypes.shape({
        story_title: PropTypes.string, 
        url: PropTypes.string,
        story_url: PropTypes.string,
        author: PropTypes.string.isRequired, 
        created_at: PropTypes.string.isRequired, 
        points: PropTypes.number, 
        comment_text: PropTypes.string.isRequired
    })
}

export default ResultItemComment