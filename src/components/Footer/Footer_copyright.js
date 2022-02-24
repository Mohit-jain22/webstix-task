import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './Footer_copyright.module.css'

export default function Footer_copyright() {
  return (
    <div className={classes.footer_copyright}>
        <Container>
            <p>
            © 2022 Webstix - All Rights Reserved.
            <a href="#">Web Design Madison WI</a>
            <a href="#">Site Map</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Hosting Copyright Infringement Policy</a>
            <a href="#">FTC Disclaimer</a>
            </p>
        </Container>
    </div>
  )
}
