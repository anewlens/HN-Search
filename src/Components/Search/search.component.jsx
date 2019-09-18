import React from 'react' 
import SearchInput from '../Input/input.component'
import CustomButton from '../CustomButton/customButton .component'
import './search.styles.scss'

const Search = () => {

    return (
        <section className="search">
            <span>
                <SearchInput />
                <CustomButton>
                    Search
                </CustomButton>
            </span>
        </section>
    )
}

export default Search