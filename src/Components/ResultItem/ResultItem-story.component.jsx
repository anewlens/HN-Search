import React from 'react'

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

export default ResultItemStory