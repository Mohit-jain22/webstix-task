import React, { useState } from 'react';
import {Form, Button, Feedback } from 'react-bootstrap'

export default function Website_form() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control required type="name" placeholder="Name*" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control required type="email" placeholder="Email*" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid EMail.</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
            <Form.Control required as="textarea" placeholder="Message:" rows={5} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid Message.</Form.Control.Feedback> 
        </Form.Group>
        <Button className='main-button' type="submit">
            Submit
        </Button>
    </Form>
  )
}
