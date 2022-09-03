import React from 'react'
import Header from '../Components/Header'
import Latest from '../Components/Latest'
import Subscribe from '../Components/Subscribe/Subscribe'
import '../styles/Detail.css'
import Nutritions from '../Components/Nutritions'
import Incredients from '../Components/Incredients'
import Category from '../Components/Category'

const Detail = () => {
    return (
        <div className='detail'>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container">
                            <h5 className="detail-category">Piza</h5>
                            <h4 className='detail-title'>Chanterelle and Porcini Mushroom Recipes</h4>
                            <div className='detail-icons'>
                                <div className="icons1">
                                    <div className="date">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span>Nov 14, 2018</span>
                                    </div>
                                    <div className="createdby">
                                        <i className="fa-solid fa-user"></i>
                                        <span>by</span>
                                        Kazi Fahim
                                    </div>
                                    <div className="rating">
                                        <i className="fa-solid fa-star"></i>
                                        9   
                                        <span> / 10</span>
                                    </div>
                                    <div className="likes">
                                        <i className="fa-solid fa-heart"></i>
                                        02
                                        <span>Likes</span>
                                    </div>
                                </div>
                                <div className="icons2">
                                    <div className="print">
                                        <i className="fa-solid fa-print"></i>
                                    </div>
                                    <div className="expand">
                                        <i className="fa-solid fa-maximize"></i>
                                    </div>
                                    <div className="share">
                                        <i className="fa-solid fa-share-nodes"></i>
                                    </div>
                                </div>
                            </div>
                            <img src="https://radiustheme.com/demo/html/ranna/ranna/img/product/product9.jpg" alt="" style={{width:"100%"}} className="mt-4"/>
                            <div className="notes">
                                <div className="time">
                                    <div>
                                        <i className="fa-solid fa-clock"></i>
                                    </div>
                                    <div>
                                        <h4>prep time</h4>
                                        <h5>45 min</h5>
                                    </div>
                                </div>
                                <div className="cooktime">
                                    <div>
                                        <i className="fa-solid fa-utensils"></i>
                                    </div>
                                    <div>
                                        <h4>cook time</h4>
                                        <h5>45 min</h5>
                                    </div>
                                </div>
                                <div className="serve">
                                    <div>
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                    <div>
                                        <h4>serving</h4>
                                        <h5>10 people</h5>
                                    </div>
                                </div>
                                <div className="view">
                                    <div>
                                        <i className="fa-solid fa-eye"></i>
                                    </div>
                                    <div>
                                        <h4>views</h4>
                                        <h5>45</h5>
                                    </div>
                                </div>
                            </div>
                            <p className='desc mt-5'>
                                Officia irure aliqua pariatur irure sunt aliqua non aliqua tempor ipsum voluptate. Nostrud laborum quis adipisicing consectetur commodo enim adipisicing consectetur. Tempor ipsum consequat elit sit est pariatur. Elit aliquip enim pariatur pariatur incididunt officia officia consectetur ex aliquip enim.</p>

                            <p className='desc'>
                                Ut ex labore occaecat culpa aliquip consequat duis quis. Ullamco culpa officia magna sint eiusmod aliquip qui deserunt ipsum sunt magna pariatur irure ad. Incididunt nulla laboris irure tempor nostrud. Consequat nulla dolore esse amet irure aliqua aliquip tempor nulla qui. Adipisicing est ex est minim dolore culpa laboris labore. Occaecat laboris occaecat deserunt aliqua nostrud eiusmod amet ea consequat commodo officia sunt.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Nutritions />
                                </div>
                                <div className="col-lg-6">
                                    <Incredients />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Latest />
                        <Subscribe />
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
        </div>
    )
}

export default Detail