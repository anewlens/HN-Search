import React from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import './history.styles.scss'
import queryAPI from '../../utils/queryAPI.utils'
import { setResults } from '../../redux/results/actions.results'

const History = () => {

    const history = useSelector(state => state.history)
    const dispatch = useDispatch()

    const queryOldTerm = queryTerm => 
        queryAPI(queryTerm)
        .then(res => dispatch(setResults(res)))
        .catch(err => console.log(err))

    return (
        <span className='history'>
            {history.map(term => (
                <p onClick={() => queryOldTerm(term)} className="history-term">{term}</p>
            ))}
        </span>
    )
}

export default History