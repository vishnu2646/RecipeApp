import React from 'react'
import '../styles/Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className='main-header'>
                <div className="icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                    <i className="fa-brands fa-skype"></i>
                    <i className="fa-solid fa-rss"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                </div>
                <div className="logo">
                    <img src="https://radiustheme.com/demo/html/ranna/ranna/img/logo-dark.png" alt="logo" />
                </div>
                <div className='search'>
                    <input type="text" name="search" id="seatch" className='form-control' placeholder='search Recipe'/>
                </div>
            </div>
        </div>
    )
}

export default Header