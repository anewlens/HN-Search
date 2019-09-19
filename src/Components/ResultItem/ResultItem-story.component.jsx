import React from 'react'
import PropTypes from 'prop-types'

const ResultItemStory = ({ result: {title, author, created_at, points, num_comments, url} }) => (
        <a href={url} target='_blank' rel="noopener noreferrer" className="resultItem-link">
                <div className="resultItem" >
                        <h3 className="resultItem-title">{title}</h3>
                        <p className="resultItem-author">by {author}</p>
                        <p className="resultItem-date">{created_at}</p>
                        <p className="resultItem-points">{points} points</p>
                        <p className="resultItem-num_comments">{num_comments} comments</p>
                </div>
        </a>
)

ResultItemStory.propTypes = {
        result: PropTypes.shape({
                title: PropTypes.string.isRequired, 
                url: PropTypes.string.isRequired, 
                author: PropTypes.string.isRequired, 
                created_at: PropTypes.string.isRequired, 
                points: PropTypes.number, 
                num_comments: PropTypes.number.isRequired
        })
}

export default ResultItemStory