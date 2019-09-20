import React from 'react'
import PropTypes from 'prop-types'
import './radioInput.styles.scss'

const RadioInput = ({name, group, checked, onChange}) => (
        <label htmlFor={name} className='radioInput-label'>
            <input 
                type="radio" 
                id={name} 
                value={name} 
                name={group} 
                checked={checked} 
                onChange={onChange} 
                className='radioInput'/>
            {name}
        </label>
)

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    group: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
}

export default RadioInput