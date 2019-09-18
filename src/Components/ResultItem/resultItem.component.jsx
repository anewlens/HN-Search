import React from 'react'
import './resultItem.styles.scss'

const ResultItem = () => { 
    return (
        <div className="resultItem" >
                <h3 className="resultItem-title">Relicensing React, Jest, Flow, and Immutable.js</h3>
                <p className="resultItem-date">Jan 13, 2019</p>
                <p className="resultItem-author">dwwoelfel</p>
                <p className="resultItem-points">2,100 points</p>
                <p className="resultItem-comments">1000 comments</p>
        </div>
    )
}

export default ResultItem