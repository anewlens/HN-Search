import React from 'react'
import PropTypes from 'prop-types'

const ResultItemStory = ({ result: {title, author, created_at, points, num_comments, story_url, url, objectID} }) => (
        <div className="resultItem" >
                <a href={url || story_url} target='_blank' rel="noopener noreferrer" className="resultItem-storyLink">
                        <h3 className="resultItem-title">{title}</h3>
                        <p className="resultItem-byline">
                                Posted by {author} on {new Date(created_at).toDateString()}
                        </p>
                </a>
                        <span className="resultItem-engagement">
                                <p className="resultItem-points">{points} points</p>
                                <a href={`https://news.ycombinator.com/item?id=${objectID}`} target='_blank' rel="noopener noreferrer"className="resultItem-hnLink">
                                        {num_comments} comments
                                </a>
                        </span>
                </div>
)

ResultItemStory.propTypes = {
        result: PropTypes.shape({
                title: PropTypes.string.isRequired, 
                url: PropTypes.string,
                story_url: PropTypes.string, 
                author: PropTypes.string.isRequired, 
                created_at: PropTypes.string.isRequired, 
                points: PropTypes.number, 
                num_comments: PropTypes.number.isRequired
        })
}

export default ResultItemStory