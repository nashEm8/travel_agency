import React from 'react';
import '../slide/slide.css';
import '../slide/slide-queries.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../images/slides/slide1.jpg';
import slide2 from '../../images/slides/slide2.jpg';
import slide3 from '../../images/slides/slide3.jpg';


const Slide = () => {
    return(
        <>
            <div className='slide-infor'>
                <div className='left-side'>
                    <Carousel fade>
                        <Carousel.Item interval={5000}>
                            <img
                            className='d-block w-100'
                            src={slide1}
                            alt="Image One"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className='d-block w-100'
                            src={slide2}
                            alt="Image Two"
                        />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                            className='d-block w-100'
                            src={slide3}
                            alt="Image Three"
                        />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='right-side'>
                    <p>Por que nos escolher?</p>
                    <h2>A majestade da natureza espera por você</h2>
                    <span>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry.</span>
                </div>
            </div>
        </>
    );  
}

export default Slide;