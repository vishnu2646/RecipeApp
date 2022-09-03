import React from 'react'
import './Theme.css'

const Switch = ({ darkMode, theme }) => {
    const iconeChange = theme === 'light' ? 'sun' : 'moon'
    return (
        <div>
            <div className="theme-switch mt-2">
                <i className={`fa-solid fa-${iconeChange}`} style={{ color: 'white'}} onClick={darkMode}></i>
            </div>
        </div>
    )
}

export default Switch