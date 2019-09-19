import React from 'react' 
import PropTypes from 'prop-types'
import './input.styles.scss'

const TextInput = props => {

    return (
        <input 
            type='text' 
            className='input' 
            {...props} />
    )
}

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput