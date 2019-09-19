import React, { useState } from 'react' 
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { setResults } from '../../redux/results/actions.results'
import { addQuery } from '../../redux/history/actions.history'
import queryAPI from '../../utils/queryAPI.utils'
import TextInput from '../Input/input.component'
import CustomButton from '../CustomButton/customButton .component'
import './search.styles.scss'

const Search = ({ setResults, addQueryToHistory }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const history = useSelector(state => state.history)

    const handleSubmit = e => {
        e.preventDefault()

        if (searchTerm) {
            queryAPI(searchTerm)
                .then(res => {
                    setResults(res)

                    if (!history.includes(res.query)) {
                        addQueryToHistory(res.query)
                    }

                    setSearchTerm('')
                })
                .catch(error => console.log(error))
        } 
    }

    return (
        <form onSubmit={handleSubmit} className="search">
            <TextInput 
                placeholder='article, author, comment...' 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} />

            <CustomButton type='submit'>
                Search
            </CustomButton>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    setResults: results => dispatch(setResults(results)),
    addQueryToHistory: query => dispatch(addQuery(query))
})

Search.propTypes = {
    setResults: PropTypes.func.isRequired,
    addQueryToHistory: PropTypes.func.isRequired
}

export default  connect(null, mapDispatchToProps)(Search)