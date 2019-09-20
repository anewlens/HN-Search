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

    const sortList = ['relevance', 'date']
    const filterList = ['any', 'story', 'comment', 'poll']

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
                {sortList.map((item, i) => <RadioInput key={i} name={item} group='sort' checked={sort === item} onChange={e => setSort(e.target.value)}/>)}
            </span>

            <span className='search-radios'>
                Filter:
                {filterList.map((item, i) => <RadioInput key={i} name={item} group='filter' checked={filter === item} onChange={e => setFilter(e.target.value)}/>)}
            </span>
        </form>
    )
}

Search.propTypes = {
    setResults: PropTypes.func.isRequired,
    addQueryToHistory: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    setResults: results => dispatch(setResults(results)),
    addQueryToHistory: query => dispatch(addQuery(query))
})

export default  connect(null, mapDispatchToProps)(Search)