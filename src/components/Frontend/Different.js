import React from 'react'
import {Col, Row } from 'react-bootstrap'
import Button from '../layout/Button'
import classes from './Different.module.css'

export default function Different() {
  return (
    <div className={classes.different}>
        <Row>
            <Col lg="7" className={classes.left}>
            <h2>Why Webstix is Different</h2>
             <p>A Webstix website simply works better because we do things other companies neglect. We have a better process, have more checklists, design better, build in better features and do more testing than other website design companies in the area. The result is a website that has huge advantages. It ranks higher after launch. It’s easier to use. It doesn’t have major things wrong with it. It simply works better – in every aspect.</p>
             <p>We focus on standardized code, interface design, and user experience design to make sure the websites we create work well. We stick to web accessibility guidelines in CSS (Cascading Style Sheets), JavaScript, and HTML markup.</p>
             <p>We go beyond design and get into how your business works. Let’s work together and create a website that works for your business.</p>
             <Button title="Learn more about Webstix" link="#"></Button>
            </Col>
            <Col lg="5" className={classes.right}>
                <div className={classes.right_inner}>
                  <div className='table'>
                    <div className='table-inner'>
                    <iframe width="250" height="120" src="https://www.youtube.com/embed/20QUNgFIrK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     <h3>Web Design Madison WI -<br /> Webstix - Madison Web Design Pros</h3>
                    </div>
                  </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}
