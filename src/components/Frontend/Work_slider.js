import React from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import classes from './Work_slider.module.css'
import image from '../../assets/image/work.png'
import Button from '../layout/Button'
export default function Work_slider() {
  return (
    <div className={classes.work_slider}>
        <Container>
            <h2>Our Work</h2>
            <Carousel className='work_slide' variant="dark" touch={true}>
                <Carousel.Item className={classes.slider}>
                    <Row>
                        <Col lg="7">
                        <h5>Capitol Pools</h5>
                        <h3>Website for Pool Companies<br /> with Online Estimators</h3>
                        <div className={classes.quote}>
                            <p className={classes.quote_p}>"Our new website raised the amount of contacts we're receiving by 3 fold!"</p>
                            <Row>
                                <Col md="2" xs="2" lg="2">
                                    <img src={image} alt="" />
                                </Col>
                                <Col md="10" xs="10" lg="10">
                                        <h5>Tim and Curt</h5>
                                        <h6>-Capitol Pools</h6>
                                </Col>
                            </Row>
                        </div>
                        <p><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span></p>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className={classes.slider}>
                    <Row>
                        <Col lg="7">
                        <h5>Capitol Pools</h5>
                        <h3>Website for Pool Companies<br /> with Online Estimators</h3>
                        <div className={classes.quote}>
                            <p className={classes.quote_p}>"Our new website raised the amount of contacts we're receiving by 3 fold!"</p>
                            <Row>
                                <Col md="2" xs="2" lg="2">
                                    <img src={image} alt="" />
                                </Col>
                                <Col md="10" xs="10" lg="10">
                                        <h5>Tim and Curt</h5>
                                        <h6>-Capitol Pools</h6>
                                </Col>
                            </Row>
                        </div>
                        <p><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span></p>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item className={classes.slider}>
                    <Row>
                        <Col lg="7">
                        <h5>Capitol Pools</h5>
                        <h3>Website for Pool Companies<br /> with Online Estimators</h3>
                        <div className={classes.quote}>
                            <p className={classes.quote_p}>"Our new website raised the amount of contacts we're receiving by 3 fold!"</p>
                            <Row>
                                <Col md="2" xs="2" lg="2">
                                    <img src={image} alt="" />
                                </Col>
                                <Col md="10" xs="10" lg="10">
                                        <h5>Tim and Curt</h5>
                                        <h6>-Capitol Pools</h6>
                                </Col>
                            </Row>
                        </div>
                        <p><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span><span>#onlinepoolestimator</span></p>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                </Carousel>
                <Button title="See More" link="#" />
        </Container>
    </div>
  )
}
