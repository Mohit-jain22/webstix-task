import React from 'react'
import classes from './Footer_five_info.module.css'
import authorize from '../../../assets/image/authorize.png'
import madison from '../../../assets/image/madison.png'
import upcity from '../../../assets/image/upcity.png'
import top from '../../../assets/image/top.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faFacebookF, faTwitter, faLinkedin, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faSquareRss, faLocationPin, faPhone, faFax } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap'
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faSquareRss);
library.add(faYoutube);
library.add(faLocationPin);
library.add(faPhone);
library.add(faFax);

export default function Footer_five_info() {
  return (
    <>
    <Row>
        <Col lg="8" >
            <Row>
                <Col lg="3" md="3" xs="6" className={classes.five}>
                    <img src={authorize} alt="" />
                    <p>Accept Credit Cards</p>
                </Col>
                <Col lg="3" md="3" xs="6" className={classes.five}>
                    <div className='table'>
                        <div className='table-inner'>
                            <img src={upcity} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" xs="6" className={classes.five}>
                <div className='table'>
                        <div className='table-inner'>
                            <img src={madison} alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg="3" md="3" xs="6" className={classes.five}>
                    <h5>Follow Us on</h5>
                    <ul className={classes.social}>
                        <li><a href="#"> <FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faSquareRss} /></a></li>
                        <li><a href="#"> <FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </Col>
            </Row>
        </Col>
        <Col lg="4">
        <div className={classes.address}>
                <h6><a href="#">Webstix in Madison, WI</a></h6>
                <Row className={classes.add}>
                    <Col lg="6" md="6">
                        <Row>
                            <Col lg="2" md="2" xs="2" sm="2">
                                <FontAwesomeIcon icon={faLocationPin} />
                            </Col>
                            <Col>
                                <p>2820 Walton Commons Ln.<br />Suite 108 <br />Madison, WI 53718</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="6">
                        <Row>
                            <Col className={classes.icon} lg="2" md="2" xs="2" sm="2">
                                <FontAwesomeIcon icon={faPhone} />
                            </Col>
                            <Col>
                                <p> <a href="tel: 6082777849">608-277-7849</a> </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={classes.icon} lg="2" md="2" xs="2" sm="2">
                                 <FontAwesomeIcon icon={faFax} />
                            </Col>
                            <Col>
                                <p> <a href="tel: 60827104020">608-710-4020</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <a href="#top"><img className={classes.top} src={top} alt="" /> </a>
            </div>
        </Col>
    </Row>
    </>
  )
}
