import React from 'react'
import PropTypes from 'prop-types'

const ResultItemComment = ({ result: { story_title, story_url, author, created_at, points, comment_text }}) => {

    const shortendComment = comment_text.substring(0, 240).concat('...')

    return (
        <a href={story_url} target='_blank' rel="noopener noreferrer" className="resultItem-link">
                <div className="resultItem" >
                        <h3 className="resultItem-storyTitle">{story_title}</h3>
                        <p className="resultItem-comment_text" dangerouslySetInnerHTML={{__html: shortendComment}} />
                        <p className="resultItem-author">by {author}</p>
                        <p className="resultItem-date">{created_at}</p>
                        <p className="resultItem-points">{points ? points : '0'} points</p>
                </div>
            </a>
    )
}

ResultItemComment.propTypes = {
    result: PropTypes.shape({
        story_title: PropTypes.string.isRequired, 
        story_url: PropTypes.string.isRequired, 
        author: PropTypes.string.isRequired, 
        created_at: PropTypes.string.isRequired, 
        points: PropTypes.number, 
        comment_text: PropTypes.string.isRequired
    })
}

export default ResultItemComment