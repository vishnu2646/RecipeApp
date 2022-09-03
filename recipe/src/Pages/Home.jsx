import React from 'react'
import Category from '../Components/Category'
import Header from '../Components/Header'
import Latest from '../Components/Latest'
import Slider from '../Components/Slider/Slider'
import Subscribe from '../Components/Subscribe/Subscribe'
import Tranding from '../Components/Tranding/Tranding'

const Home = () => {
    return (
        <>
            <div className='home'>
                <Header />
                <Slider />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <Tranding />
                    </div>
                    <div className="col-md-4">
                        <Subscribe />
                        <Latest />
                        <Category />
                        <div className="latest-upadtes">
                            <h5>get latest updates</h5>
                            <p>Newsletter Subscribe</p>
                            <input type="text" name="subscribe" className='form-control' placeholder='Your e-mail address' id="subscribe-form" />
                            <button className='btn btn-danger'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home