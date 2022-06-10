import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import img1 from '../imgs/02.jpg'
import img2 from '../imgs/02.webp'
import img3 from '../imgs/03.webp'
import img4 from '../imgs/04.jpg'
import img5 from '../imgs/05.jpg'
import img6 from '../imgs/06.jpg'
import img7 from '../imgs/07.jpg'
import img8 from '../imgs/08.jpg'
import img9 from '../imgs/09.jpg'
import img10 from '../imgs/10.jpg'
import img11 from '../imgs/11.jpg'
import img12 from '../imgs/12.jpg'

const Contests = () => {

    return (

        <>
            <Container className='py-5' >

                <Row className='my-4'>

                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img7} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-100" src={img8} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-100" src={img9} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img4} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img5} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img6} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>

                <Row className='my-4'>


                    <Col>
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img1} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img2} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img3} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                    <Col >
                        <Carousel fade>
                            <Carousel.Item>
                                <img className="d-block w-100 h-100" src={img10} alt="First slide" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-100" src={img11} alt="Second slide" />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-100" src={img12} alt="Third slide" />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>

                </Row>

            </Container>
        </>

    )
}

export default Contests  
