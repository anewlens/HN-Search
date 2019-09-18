import React from 'react'
import './customButton.styles.scss'

const CustomButton = ({children}) => (
    <button className='customButton'>
        {children}
    </button>
)

export default CustomButton