import React from 'react';
import { CiMap } from "react-icons/ci";
import { LuPhone, LuSend } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
// require('dotenv').config();


const Contact = () => {


    const emailForm = async (e) => {
        e.preventDefault();

        await emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
            console.log("Email Sent:", result.text);
            // alert("Message Sent Successfully!");
            e.target.reset();
        })
        .catch((error) => {
            console.error("Error Sending Email:", error);
            alert("Failed to send message. Please try again.");
        });
    }

    
    return (
        <article className='Contact__page'>
            <div className="text-center text-white">
                <p style={{ color: 'orangered', fontSize: '20px' }}>Contact</p>
                <h2 className='fs-1'>Get In Touch</h2>
            </div>

            <div className="container mt-4">
                <div className="row g-4">  
                    {/* Contact Info */}
                    <div className='col-12 col-lg-5 d-flex flex-column'>
                        <div className='rounded mb-3 contact__card text-center py-4' style={{ backgroundColor: '#25282C' }}>
                            <CiMap style={{ color: 'orangered', fontSize: '80px' }} />
                            <b className="text-white">Lagos Nigeria</b>
                        </div>

                        <div className='rounded mb-3 contact__card text-center py-4' style={{ backgroundColor: '#25282C' }}>
                            <LuPhone style={{ color: 'orangered', fontSize: '80px' }} />
                            <b className="text-white">+234 7011450850</b>
                        </div>

                        <div className='rounded mb-3 contact__card text-center py-4' style={{ backgroundColor: '#25282C' }}>
                            <AiOutlineMail style={{ color: 'orangered', fontSize: '80px' }} />
                            <b className="text-white">giftedzinoleslie@gmail.com</b>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-12 col-lg-7">
                        <Form className='rounded form__page p-4' onSubmit={emailForm} style={{ backgroundColor: '#25282C', color: 'white' }}>
                            <div className="row g-3">
                                <div className='col-12 col-md-6'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name='email_name' className='form__page-inputField' style={{ padding: "16px 10px", backgroundColor: '#0a0a0a', color: 'whitesmoke' }} placeholder="Enter Your Name" />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" name='email_phone' className='form__page-inputField' style={{ padding: "16px 10px", backgroundColor: '#0a0a0a', color: 'whitesmoke' }} placeholder="Enter Your Phone Number" />
                                </div>
                            </div>

                            <div className="row g-3 mt-2">
                                <div className='col-12 col-md-6'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name='email_email' className='form__page-inputField' style={{ padding: "16px 10px", backgroundColor: '#0a0a0a', color: 'whitesmoke' }} placeholder="Example@gmail.com" />
                                </div>

                                <div className='col-12 col-md-6'>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" name='email_subject' className='form__page-inputField' style={{ padding: "16px 10px", backgroundColor: '#0a0a0a', color: 'whitesmoke' }} placeholder="Enter Your Subject" />
                                </div>
                            </div>

                            <Form.Group className="mt-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control className='form__page-inputField' name='email_message' style={{ padding: "16px 10px", backgroundColor: '#0a0a0a', color: 'whitesmoke' }} placeholder='Send us a message' as="textarea" rows={6} />
                            </Form.Group>

                            <div className="pt-3">
                                <button className='btn btn-dark' type='submit'>
                                    <i>Send Message</i> <span className='ms-2'><LuSend /></span>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Contact;
