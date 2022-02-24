import React, { useState } from 'react';
import {Form, Button, Feedback, Row, Col } from 'react-bootstrap'
import classes from './Newsletter_form.module.css'

export default function Newsletter_form() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
  return (
    <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className={classes.row}>
                <Col xs="7" md="7" lg="7"> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Email*" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide a valid EMail.</Form.Control.Feedback>
                </Form.Group>
                </Col>
                <Col xs="5" md="5" lg="5" className='button-contain'>
                <Button className='main-button' type="submit">
                    Submit
                </Button>
                </Col>
            </Row>
    </Form>
    </div>
  )
}
