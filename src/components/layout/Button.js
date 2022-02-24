import React from 'react'
import classes from './Button.module.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faArrowRight);
export default function Button(props) {
  return (
    <a className={classes.main_button} href={props.link}>{props.title}<FontAwesomeIcon icon="arrow-right" /></a> 
  )
}
