import React, { useState } from 'react' 
import { connect } from 'react-redux'
import { setResults } from '../../redux/results/actions.results'
import TextInput from '../Input/input.component'
import CustomButton from '../CustomButton/customButton .component'
import './search.styles.scss'

const Search = ({ setResults }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const queryAPI = e => {
        e.preventDefault()

        const query = searchTerm
        
        if (query) {
            fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
                .then(res => res.json())
                .then(res => {
                    setResults(res)
                    setSearchTerm('')
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <form onSubmit={queryAPI} className="search">
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
    setResults: results => dispatch(setResults(results))
})

export default  connect(null, mapDispatchToProps)(Search)