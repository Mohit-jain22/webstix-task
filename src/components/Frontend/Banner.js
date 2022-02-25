import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../layout/Button'
import image from '../../assets/image/cp_banner_image.png'
import google from '../../assets/image/google_rating.png'
import classes from './Banner.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar  } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);
export default function Banner() {
  return (
    <div className={classes.banner}>
        <Container>
            <Row>
                <Col className={classes.space} lg="8">
                <div className='table'>
                    <div className='table-inner'>
                        <h1>Website Design With Better<br />Performance & Built-In Strategy<br /> That Simply Works Better.</h1>
                        <Button title="What we do" link="#" />
                        <Row className={classes.pad}>
                            <Col lg="3">
                            <img className={classes.google} src={google} alt="" />    
                            </Col>
                            <Col lg="4">
                               <p>Webstix is rated 4.8/5 stars</p>
                               <div className={classes.star}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                               </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>
                <Col lg="4">
                <div className='table'>
                    <div className='table-inner'>
                        <img src={image} alt="" />
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
