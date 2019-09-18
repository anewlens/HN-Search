import React from 'react' 
import './input.styles.scss'

const TextInput = ({placeholder, handler, value}) => {

    return (
        <input 
            type='text' 
            className='input' 
            placeholder={placeholder}
            value={value}
            onChange={handler}/>
    )
}

export default TextInput