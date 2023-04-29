import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './assets/sytle.css'

function UncontrolledExample() {
    const width = window.innerWidth;
    const maxWidth = 600;

    if (width <= maxWidth) {
        return (
            <div className="slider-container">
                <Carousel className='sliderContainer'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1520700008388-af1981de9835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBwaG90b2dyYXBoeSUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Makanan Yang Berasa</h3>
                            <p>Bersama menikmati makanana yang sangat berasa.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1516684465974-78661ba8165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2QlMjBwaG90b2dyYXBoeSUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Perpaduan Yang Sempurna</h3>
                            <p>Gabungan citra rasa yang membuatnya istimewa.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjBwaG90b2dyYXBoeSUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Tempat Nyaman dan Bersih</h3>
                            <p>
                                Kenyamanan pelanggan adalah prioritas kami.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default UncontrolledExample;