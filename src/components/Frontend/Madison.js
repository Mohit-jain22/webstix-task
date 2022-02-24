import React from 'react'
import {Col, Row } from 'react-bootstrap'
import Button from '../layout/Button'
import classes from './Madison.module.css'
import image from '../../assets/image/cp_banner_image.png'

export default function Madison() {
  return (
    <div className={classes.madison}>
        <Row>
            <Col lg="7" className={classes.left}>
            <h2>Web Design Madison WI -<br /> Webstix - Madison Web Design Pros</h2>
             <p>A Webstix website simply works better because we do things other companies neglect. We have a better process, have more checklists, design better, build in better features and do more testing than other website design companies in the area. The result is a website that has huge advantages. It ranks higher after launch. It’s easier to use. It doesn’t have major things wrong with it. It simply works better – in every aspect.</p>
             <p>We focus on standardized code, interface design, and user experience design to make sure the websites we create work well. We stick to web accessibility guidelines in CSS (Cascading Style Sheets), JavaScript, and HTML markup.</p>
             <p>We go beyond design and get into how your business works. Let’s work together and create a website that works for your business.</p>
             <Button title="Read More" link="#"></Button>
            </Col>
            <Col lg="5" className={classes.right}>
                <div className={classes.right_inner}>
                  <div className='table'>
                    <div className='table-inner'>
                        <img src={image} alt="" />
                    </div>
                  </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}
