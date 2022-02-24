import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../layout/Button'
import Website_form from '../layout/Website_form'
import classes from './Contact_form.module.css'

export default function Contact_form() {
  return (
    <div className={classes.contact_form}>
            <Row>
                <Col lg="7" className={classes.space}>
                    <h2>Tired of Your Website Not Delivering Results?</h2>
                    <h3>Is Website Traffic Flat Lining?</h3>
                    <p>With Webstix, you get expert website marketing, design and performance that:</p>
                    <ul>
                        <li>Increases leads/sales with better traffic conversion</li>
                        <li>Helps your website rank higher by giving Google what it wants</li>
                        <li>Makes your website easy to manage</li>
                        <li>Gives you the support you need to keep rocking it!</li>
                    </ul>
                    <Row className={classes.row}>
                        <Col md="5" lg="5">
                            <Button title="See Case Studies" link="#" />
                        </Col>
                        <Col md="5" lg="5">
                            <Button title="See Testimonials" link="#" />
                        </Col>
                    </Row>
                </Col>
                <Col lg="5" className={classes.form}>
                    <h2>Awesomeness awaits!</h2>
                    <h3>Connect with our experts.</h3>
                    <Website_form />
                </Col>
            </Row>
    </div>
  )
}
