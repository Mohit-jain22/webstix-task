import React from 'react'
import Button from '../layout/Button'
import classes from './Client.module.css'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { Row, Col } from 'react-bootstrap';
import logo from '../../assets/image/play.png'
const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    items: 2.6,
    responsive: {
        1: {
          items: 1
        },
      769: {
        items: 2.6
      }
    }
  };

export default function Client() {
  return (
    <div className={classes.client}>
        <h2>What Our Client Say</h2>
        <TinySlider settings={settings}>
           <div style={{ position: "relative" }}>
                <div className={classes.slider_inner}>
                    <img src="https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png" alt="" />
                    <Row>
                        <Col className={classes.icon} md="2" sm="2" xs="2" lg="2">
                            <img className={classes.image} src={logo} alt="" />
                        </Col>
                        <Col md="10" sm="10" xs="10" lg="10">
                            <p>Brett F.</p>
                            <p>- Badger Utility </p>
                        </Col>
                    </Row>
                </div>
           </div>
           <div style={{ position: "relative" }}>
                <div className={classes.slider_inner}>
                    <img src="https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png" alt="" />
                    <Row>
                        <Col className={classes.icon} md="2" sm="2" xs="2" lg="2">
                            <img className={classes.image} src={logo} alt="" />
                        </Col>
                        <Col md="10" sm="10" xs="10" lg="10">
                            <p>Stacy and Rich,</p>
                            <p>- Capital Bee Supply </p>
                        </Col>
                    </Row>
                </div>
           </div>
           <div style={{ position: "relative" }}>
                <div className={classes.slider_inner}>
                    <img src="https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png" alt="" />
                    <Row>
                        <Col className={classes.icon} md="2" sm="2" xs="2" lg="2">
                            <img className={classes.image} src={logo} alt="" />
                        </Col>
                        <Col md="10" sm="10" xs="10" lg="10">
                            <p>Brett F.</p>
                            <p>- Badger Utility </p>
                        </Col>
                    </Row>
                </div>
           </div>
           <div style={{ position: "relative" }}>
                <div className={classes.slider_inner}>
                    <img src="https://www.ccb-holdings.com/wp-content/uploads/2021/10/SOCIAL-MEDIA-MARKETING-1.png" alt="" />
                    <Row>
                        <Col className={classes.icon} md="2" sm="2" xs="2" lg="2">
                            <img className={classes.image} src={logo} alt="" />
                        </Col>
                        <Col md="10" sm="10" xs="10" lg="10">
                            <p>Stacy and Rich,</p>
                            <p>- Capital Bee Supply </p>
                        </Col>
                    </Row>
                </div>
           </div>
        </TinySlider>
        <Button title="Our Clients Love Us - Click" link="#" />
    </div>
  )
}
