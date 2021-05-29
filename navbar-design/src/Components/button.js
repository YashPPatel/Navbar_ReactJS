import React from 'react'
import './button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonsize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonstyle} ${checkButtonsize}`} onClick={onClick} type={type}> {children} </button>
    )
}