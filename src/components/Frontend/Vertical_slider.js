import React from 'react'
import classes from './Vertical_slider.module.css'
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import image from '../../assets/image/work.png'

export default function Vertical_slider() {
  return (
    <div className={classes.vertical_slider}>
        <div className={classes.vertical_slider_inner}>
            <Container>
                <Carousel className='vertical'>
                <Carousel.Item>
                    <Row className={classes.slider}>
                        <h2>We are E-Commerce and Page Speed Experts!</h2>
                        <Col lg="7" className={classes.space}>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <ul>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                        </ul>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className={classes.slider}>
                        <h2>We are E-Commerce and Page Speed Experts!</h2>
                        <Col lg="7" className={classes.space}>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <ul>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                        </ul>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className={classes.slider}>
                        <h2>We are E-Commerce and Page Speed Experts!</h2>
                        <Col lg="7" className={classes.space}>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <p>Webstix (in business since 2001) is a web site developer offering beautiful, award winning responsive website design paired with solid website marketing and promotion services so that your website works as a marketing tool for your business or organization. We’re experts in web engineering and web development. We can even take care of web accessibility so that everyone coming to your website can access your important content.</p>
                        <ul>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                            <li>We think about the little stuff</li>
                            <li>We Communicate</li>
                        </ul>
                        </Col>
                        <Col lg="5">
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    </div>
  )
}
