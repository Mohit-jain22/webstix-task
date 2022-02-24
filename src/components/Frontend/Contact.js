import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import image from '../../assets/image/cp_banner_image.png'
import classes from './Contact.module.css'
import Button from '../layout/Button'

export default function Contact() {
  return (
    <div className={classes.contact}>
        <Container>
            <Row>
                <Col lg="7" className={classes.space}>
                    <img src={image} alt="" />
                </Col>
                <Col lg="5">
                    <h2>It's Easy to Get Started:</h2>
                    <ul>
                        <li>1. Contact Us</li>
                        <li>2. Let's Talk</li>
                        <li>3. We Get You a Quote</li>
                    </ul>
                    <Button title="Let's Talk! 608-277-7849" link="#" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
