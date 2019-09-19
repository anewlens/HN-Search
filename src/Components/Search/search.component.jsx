import React, { useState } from 'react' 
import { connect, useSelector } from 'react-redux'
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

        searchTerm && queryAPI(searchTerm)
                        .then(async res => {
                            await setResults(res)

                            if (!history.includes(res.query)) {
                                await addQueryToHistory(res.query)
                            }

                            setSearchTerm('')
                        })
                        .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit} className="search">
                <TextInput 
                    placeholder='article, author, comment...' 
                    value={searchTerm}
                    handler={e => setSearchTerm(e.target.value)} />

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

export default  connect(null, mapDispatchToProps)(Search)