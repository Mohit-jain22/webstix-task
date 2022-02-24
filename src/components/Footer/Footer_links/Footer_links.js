import React from 'react'
import classes from './Footer_links.module.css'

export default function Footer_links(props) {
  return (
    <li className={classes.footer_link}>
        <a href={props.link}>{props.title}</a>
    </li>
  )
}
