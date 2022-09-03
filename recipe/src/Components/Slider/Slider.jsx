import React,{ useState } from 'react'
import '../../styles/Slider.css'
import HomeSlider from '../../data/HomeSlider'
import leftArrow from '../../icons/left-arrow.svg'
import rightArrow from '../../icons/right-arrow.svg'

const Slider = () => {

    const [slide, setSlide] = useState(0)

    const left = () => {
        slide === 0 ? setSlide(-100 * (HomeSlider.length - 1)) : setSlide(slide + 100)
    }

    const right = () => {
        (slide === -100 * (HomeSlider.length - 1)) ? setSlide(0) : setSlide(slide - 100)
    }

    return (
        <div className='slider'>
            {
                HomeSlider.map((item, index) => (
                    <div className="container container1" key={index} style={{transform: `translateX(${slide}%)`}}>
                        <img src={item.image} alt="Snow" />
                        <div className="bottom">
                            <h2 className='category'>{item.category}</h2>
                            <h3 className='title'>{item.title}</h3>
                            <p className='rating'>{item.rating}/10</p>
                            <p className='description'>{item.description}</p>
                            <div className='d-flex justify-content-evenly details'>
                                <div className='time'>
                                    <i className="fa-solid fa-alarm-clock"></i>
                                    <span>{item.time}</span> Min
                                </div>
                                <div className='time'>
                                    <i className="fa-solid fa-user me-2"></i>
                                    by <span>{item.author}</span>
                                </div>
                                <div className='time'>
                                    <i className="fa-solid fa-heart"></i>
                                    <span>{item.likes}</span> Likes
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button className='btn btn-left' onClick={left}>
                <img src={leftArrow} alt="left" />
            </button>
            <button className="btn btn-right" onClick={right}>
                <img src={rightArrow} alt="left" />
            </button>
        </div>
    )
}

export default Slider