import React, { useState } from 'react' 
import { connect, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { setResults } from '../../redux/results/actions.results'
import { addQuery } from '../../redux/history/actions.history'
import queryAPI from '../../utils/queryAPI.utils'

import TextInput from '../Inputs/Text/textInput.component'
import CustomButton from '../CustomButton/customButton .component'
import RadioInput from '../Inputs/Radio/radioInput.component'
import './search.styles.scss'

const Search = ({ setResults, addQueryToHistory }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [sort, setSort] = useState('relevance')
    const [filter, setFilter] = useState('any')
    const history = useSelector(state => state.history)

    const handleSubmit = e => {
        e.preventDefault()

        if (searchTerm) {
            queryAPI(searchTerm, sort, filter)
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

    const handleSort = e => setSort(e.target.value)
    const handleFilter = e => setFilter(e.target.value)

    return (
        <form onSubmit={handleSubmit} className="search">
            <span className='search-bar'>
                <TextInput 
                    placeholder='article, author, comment...' 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} />

                <CustomButton type='submit'>
                    Search
                </CustomButton>
            </span>

            <span className='search-radios'>
                Sort By:
                <RadioInput  name='relevance' group='sort' checked={sort === 'relevance'} onChange={handleSort}/>
                <RadioInput  name='date' group='sort' checked={sort === 'date'} onChange={handleSort}/>
            </span>

            <span className='search-radios'>
                Filter:
                <RadioInput  name='any' group='filter' checked={filter === 'any'} onChange={handleFilter}/>
                <RadioInput  name='story' group='filter' checked={filter === 'story'} onChange={handleFilter}/>
                <RadioInput  name='comment' group='filter' checked={filter === 'comment'} onChange={handleFilter}/>
                <RadioInput  name='poll' group='filter' checked={filter === 'poll'} onChange={handleFilter}/>
            </span>
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