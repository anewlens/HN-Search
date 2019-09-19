import React from 'react'
import PropTypes from 'prop-types'
import './customButton.styles.scss'

const CustomButton = props => (
    <button {...props} className='customButton'>
        {props.children}
    </button>
)

CustomButton.propTypes = {
    type: PropTypes.string.isRequired
}

export default CustomButton