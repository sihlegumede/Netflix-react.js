import React from 'react';
import './Navbar.css';
import Logonetflix from '../../images/Logonetflix.png';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className='navbar'>
      <div className='netflix_logo'>
        <img src={Logonetflix} />
      </div>
      <div className="sign_in">
        <button type="button" variant="primary" onClick={handleShow}>Sign In</button>

        <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header closeButton className='modal_header'>
          <Modal.Title style={{fontSize: "1.8rem", fontWeight: "bolder"}}>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_body'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email address or phone number"
                autoFocus

                style={{backgroundColor: "rgb(10, 10, 10)", color: "#fff", border: "1px solid gray", padding:"1rem"}}
              />
            </Form.Group>
            <Form.Group
              className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus

                style={{backgroundColor: "rgb(10, 10, 10)", color: "#fff", border: "1px solid gray", padding:"1rem"}}
              />
              <button type='button' style={{
                backgroundColor: "red", 
                color: "#fff", 
                textAlign: "center", 
                padding: "0.7rem",
                marginTop: "1rem",
                border:"none", 
                width: "100%"}}>Sign In</button>
            </Form.Group>
            <Form.Group
              className="mb-3" controlId="exampleForm.ControlTextarea1">
              <a href="#" className='modal_forgot-password'>Forgot password?</a>
              <p className='modal_new-to-netflix'>New to Netflix? <a href="#">Sign up now</a></p>
              <p className='modal_this-page'>This page protected by Google reCAPTCHA to ensure you're not a bit <a href="#">learn more</a></p>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      </div>
    </nav>
  )
}

export default Navbar