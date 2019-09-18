import React from 'react' 
import './input.styles.scss'

const SearchInput = () => {

    return (
        <input type='text' 
                placeholder='article, author, comment...' 
                onChange={() => console.log('type type type')}
                className='input' />
    )
}

export default SearchInput