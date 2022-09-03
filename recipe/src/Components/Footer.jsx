import React from 'react'
import '../styles/Footer.css'

const Footer = ({isFromLogin}) => {
    return (
        <div className='footer-outer' style={{
            display: isFromLogin ? 'none' : 'block',
        }}>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <div className="footer-logo">
                    <img src="https://radiustheme.com/demo/html/ranna/ranna/img/logo-light.png" alt="" />
                </div>
                <div className="footer-links">
                    <ul className='footer-uls'>
                        <li className='footer-link'>
                            facebook
                        </li>
                        <li className='footer-link'>
                            twitter
                        </li>
                        <li className='footer-link'>
                            instagram
                        </li>
                        <li className='footer-link'>
                            google+
                        </li>
                        <li className='footer-link'>
                            youtube
                        </li>
                    </ul>
                </div>
                <span>© All Right Reserved 2021</span>
            </div>
        </div>
    )
}

export default Footer