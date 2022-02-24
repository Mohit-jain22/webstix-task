import React from 'react'
import Footer_widgets from './Footer_links/Footer_widgets'
import classes from './Footer_main.module.css'
import { Container } from 'react-bootstrap'

export default function Footer_main() {
  return (
    <div className={classes.footer_main}>
        <Container>
            <Footer_widgets />
            <div className='clearfix'></div>
        </Container>
    </div>
  )
}
