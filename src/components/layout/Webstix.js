import React from 'react'
import classes from './Webstix.module.css'
import $ from 'jquery';

export default function Webstix(props) {
  return (
    <div className={classes.five}>
        <div key={props.id} className={classes.service_inner}>
            <img src={props.imagelink} alt="" />
            <h4>{props.title}</h4>
        </div>
    </div>
  )
}


$(window).on("load", function () {
    var t = 0;
    // eslint-disable-next-line no-unused-expressions
    $("h4").each(function () {
        $(this).height() > t && (t = $(this).height());
    }),
        $("h4").each(function () {
            $(this).height(t);
        });
});


