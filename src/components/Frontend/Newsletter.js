import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from '../layout/Button'
import Newsletter_form from '../layout/Newsletter_form'
import classes from './Newsletter.module.css'

export default function Newsletter() {
  return (
    <div className={classes.newsletter}>
        <Container>
            <Row>
                <Col lg="4" className={classes.space}>
                    <div className={classes.news_inner}>
                        <img src='https://www.ccb-holdings.com/wp-content/uploads/2021/10/VIDEO-MARKETING-1.png' alt="" />
                        <h4>Get a FREE Evaluation of Your Website for ADA Compliance</h4>
                        <Button title="Get Now" link="#" />
                    </div>
                </Col>
                <Col lg="4" className={classes.space}>
                    <div className={classes.news_inner}>
                        <img src='https://www.ccb-holdings.com/wp-content/uploads/2021/10/SEO-CONTEST-1.png' alt="" />
                        <h4>Website Financing Options Available</h4>
                        <Button title="Find Out More" link="#" />
                    </div>
                </Col>
                <Col lg="4" className={classes.space}>
                    <div className={classes.news_in}>
                        <img src='https://www.ccb-holdings.com/wp-content/uploads/2021/10/CONTENT-MARKETING-1.png' alt="" />
                        <p>Get Website strategies and Webstix specials</p>
                        <Newsletter_form />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
