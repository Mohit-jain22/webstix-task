import React from 'react'
import { Col } from 'react-bootstrap'
import classes from './Services.module.css'
import $ from 'jquery';

export default function Services(props) {
  return (
    <Col md="6" lg="3" className={classes.space}>
        <div key={props.id} className={classes.service_inner}>
            <img src={props.imagelink} alt="" />
            <h4>{props.title}</h4>
        </div>
    </Col>
  )
}


$(window).on("load", function () {
    var t = 0;
    $("h4").each(function () {
        $(this).height() > t && (t = $(this).height());
    }),
        $("h4").each(function () {
            $(this).height(t);
        });
});


