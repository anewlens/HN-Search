import React, { useState } from 'react' 
import TextInput from '../Input/input.component'
import CustomButton from '../CustomButton/customButton .component'
import './search.styles.scss'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')

    const queryAPI = () => {
        const query = searchTerm
        
        if (query) {
            fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(error => console.log(error))
        }
    }

    return (
        <section className="search">
                <TextInput 
                    placeholder='article, author, comment...' 
                    value={searchTerm}
                    handler={e => setSearchTerm(e.target.value)} />

                <CustomButton handler={queryAPI}>
                    Search
                </CustomButton>
        </section>
    )
}

export default Search