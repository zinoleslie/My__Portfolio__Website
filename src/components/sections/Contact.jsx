import React from 'react'
import { CiMap } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { LuSend } from "react-icons/lu";

const Contact = () => {
    return (
        <article className='Contact__page'>
            <div className="text-center text-white">
                <p style={{ color: 'orangered', fontSize: '20px' }}>Contact</p>
                <h2 className='fs-1'>Get In Touch</h2>
            </div>

            <div className="container d-flex justify-content-between border-white" style={{ margin: '40px auto', padding: '20px 40px' }}>


                <div className='d-flex flex-column'>
                    <div className='rounded mb-4 contact__card d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#25282C', width: '400px', height: '150px' }}>
                        <small style={{ color: 'orangered', fontSize: '80px', marginTop: '-27px' }}><CiMap /></small>
                        <b style={{ color: 'white' }}>Lagos Nigeria</b>
                    </div>


                    <div className='rounded mb-4 contact__card d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#25282C', width: '400px', height: '150px' }}>
                        <small style={{ color: 'orangered', fontSize: '80px', marginTop: '-27px' }}><LuPhone /></small>
                        <b style={{ color: 'white' }}>+234 7011450850</b>
                    </div>

                    <div className='rounded mb-4 contact__card d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: '#25282C', width: '400px', height: '150px' }}>
                        <small style={{ color: 'orangered', fontSize: '80px', marginTop: '-27px' }}><AiOutlineMail /></small>
                        <b style={{ color: 'white' }}>giftedzinoleslie@gmail.com</b>
                    </div>
                </div>

                <div className="form">
                    <Form className='rounded form__page d-flex flex-column justify-content-center' style={{ width: '780px', color: 'white', backgroundColor: '#25282C', padding: '20px 40px', height: '500px' }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <div className="d-flex justfy-content-between row pb-2">
                                <div className='col-6 col-sm-6'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" className='form__page-inputField' style={{padding:"16px 10px", backgroundColor: '#0a0a0a', color:'whitesmoke'}} placeholder="Enter Your Name" />
                                </div>
                                
                                <div className='col-6 col-sm-6'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" className='form__page-inputField' style={{padding:"16px 10px", backgroundColor: '#0a0a0a', color:'whitesmoke'}} placeholder="Enter Your phone Number" />
                                </div>
                                
                            </div>

        
                            <div className="d-flex justfy-content-between row pb-2">
                            <div className='col-6 col-sm-6'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" className='form__page-inputField' style={{padding:"16px 10px",backgroundColor: '#0a0a0a', color:'whitesmoke'}} placeholder="Enter Your subject" />
                                </div>
                                
                                
                                <div className='col-6 col-sm-6'>
                                    <Form.Label>Suject</Form.Label>
                                    <Form.Control type="text" className='form__page-inputField' style={{padding:"16px 10px",backgroundColor: '#0a0a0a', color:'whitesmoke'}} placeholder="Enter Your Subject" />
                                </div>
                                
                            </div>

        
                        

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control className='form__page-inputField' style={{padding:"16px 10px",backgroundColor: '#0a0a0a', color:'whitesmoke'}} placeholder='send us a message' as="textarea" rows={6} />
                        </Form.Group>
                        <div className="align-self-start ps-2 pt-2">
                            <button className='btn btn-dark'><i>send message</i> <span className='ms-2'><LuSend /></span> </button>
                        </div>
                        
                    </Form>
                </div>
            </div>
        </article>
    )
}

export default Contact