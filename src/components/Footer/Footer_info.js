import React from 'react'
import { Container } from 'react-bootstrap'
import classes from './Footer_info.module.css'
import Footer_five_info from './Footer_info/Footer_five_info'

export default function Footer_info() {
  return (
    <div className={classes.footer_info}>
        <Container>
            <Footer_five_info />
            <div className='clearfix'></div>
        </Container>
    </div>
  )
}
