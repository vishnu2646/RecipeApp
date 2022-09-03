import React from 'react'
import {Link} from 'react-router-dom'
import LatestData from '../data/latestData'

const Latest = () => {
    return (
        <div className='latest-outer mt-5'>
            <h2 className="section-heading">latest recipes</h2>
                {
                    LatestData ? 
                        LatestData.map((latest, index) => (
                            <Link to={`/detail/${index+1}`}>
                                <div className="latest-item" key={index}>
                                    <div className='latest-img'>
                                        <img src={latest.image} alt="" />
                                        <div className="count-number">
                                            <p>{index+1}</p>
                                        </div>
                                    </div>
                                    <div className="latest-item-content">
                                        <h5>{latest.category}</h5>
                                        <h6>{latest.name}</h6>
                                        <p><i className="fa-solid fa-user"></i> <span>by</span> {latest.author}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    :
                    <>
                    </>
                }
        </div>
    )
}

export default Latest