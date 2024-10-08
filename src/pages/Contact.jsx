import React from 'react'
import './Contact.css'
import ContactInfo from '../components/ContactInfo'
import { Form } from 'react-bootstrap'

export default function Contact() {
  return (
    <div className='contact-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light text-uppercase'>Contact</h1>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <Form action="#">
              <Form.Group className='row mb-3'>
                <div className="col-md-6">
                  <Form.Label htmlFor='name'>Name</Form.Label>
                  <Form.Control type='text' id='name' />
                </div>
              </Form.Group>
              <Form.Group className='row mb-3'>
                <div className="col-md-6">
                  <Form.Label htmlFor='email'>Email</Form.Label>
                  <Form.Control type='email' id='email-address' />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor='tel'>Phone Number</Form.Label>
                  <Form.Control type='tel' id='phone-number' />
                </div>
              </Form.Group>
              <Form.Group className='row mb-3'>
                <div className="col-md-6">
                  <Form.Label htmlFor='date'>Date</Form.Label>
                  <Form.Control type='date' id='date' />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor='guests-number'>Number Of Guests</Form.Label>
                  <Form.Control type='number' id='guests-number' />
                </div>
              </Form.Group>
              <Form.Group className='mb-4'>
                  <Form.Label htmlFor='comments'>Comments</Form.Label>
                  <Form.Control type='textarea' id='comments' />
              </Form.Group>
              <button className='btn btn-outline-success btn-lg'>Submit</button>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}
