import React from 'react'
import './customButton.styles.scss'

const CustomButton = ({children, handler}) => (
    <button type='button' onClick={handler} className='customButton'>
        {children}
    </button>
)

export default CustomButton