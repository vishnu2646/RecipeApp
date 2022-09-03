import React from 'react'
import '../styles/Navbar.css'
import Switch from './Theme/Switch'

const Navbar = ({ darkMode, theme }) => {
    return (
        <header className='nav-header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active">Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link active">Category</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link active">Recipes</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link active">Contact</span>
                            </li>
                        </ul>
                        <span className="nav-link login">
                            <i className="fas fa-user me-2"></i>
                            Login
                        </span>
                        <span className="nav-link active">
                            <button className='btn btn-danger create-btn shadow-none'>
                                <i className="fas fa-plus me-2"></i>
                                Submit Recipe
                            </button>
                        </span>
                        <Switch darkMode={darkMode} theme={theme}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar