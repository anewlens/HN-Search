import React from 'react' 
import PropTypes from 'prop-types'
import './textInputs.styles.scss'

const TextInput = props => {

    return (
        <input 
            type='text' 
            className='textInput' 
            {...props} />
    )
}

TextInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default TextInput