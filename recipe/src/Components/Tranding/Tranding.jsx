import React from 'react'
import TrandingData from '../../data/TrandingData'
import '../../styles/Tranding.css'
import {Link} from 'react-router-dom'

const Tranding = () => {
    return (
        <>
            <h2 className="section-heading">trending recipes</h2>
            <div className='tranding-outter'>
                {
                    TrandingData ? 
                        TrandingData.map((tranding, index) => (
                            <Link to={`/detail/${index+1}`}>
                                <div className="tranding" key={index}>
                                    <img src={tranding.image} alt="tranding 1" />
                                    <div className="tanding-content">
                                        <h2 className='category'>{tranding.category}</h2>
                                        <h3 className='title'>{tranding.name}</h3>
                                        <p className='rating'> {tranding.rating} / 10</p>
                                        <p className='description'>{tranding.description}</p>
                                        <div className='d-flex justify-content-evenly details'>
                                            <div className='time'>
                                                <i className="fa-solid fa-alarm-clock"></i>
                                                <span>{tranding.time}</span> Min
                                            </div>
                                            <div className='time'>
                                                <i className="fa-solid fa-user me-2"></i>
                                                by <span>{tranding.authour}</span>
                                            </div>
                                            <div className='time'>
                                                <i className="fa-solid fa-heart"></i>
                                                <span>{tranding.likes}</span> Likes
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    :<></>
                }

                
            </div>
        </>
    )
}

export default Tranding