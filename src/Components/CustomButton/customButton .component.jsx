import React from 'react'
import './customButton.styles.scss'

const CustomButton = props => (
    <button {...props} className='customButton'>
        {props.children}
    </button>
)

export default CustomButton