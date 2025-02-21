import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <section className="home-section" style={{ minHeight: '100vh', width: '100%', backgroundColor: '#0a0a0a', color: 'white', display: 'flex', alignItems: 'center' }}>
            <div className='container'>
                <div className='row d-flex align-items-center flex-column-reverse flex-md-row'>

                    {/* Left Section (Text) */}
                    <div className='col-12 col-md-6 text-center text-md-start mt-4'>
                        <h1>Hello, I'm <span style={{ color: 'orangered' }}>Zino Leslie</span></h1>
                        <p>
                            I'm a passionate Full-Stack Software Developer with expertise in modern web technologies 
                            like JavaScript, React, Node.js, Express, and MongoDB. I specialize in building scalable, 
                            high-performance applications with sleek, responsive interfaces and powerful backends. 
                            Let’s build something incredible together!
                        </p>

                        {/* Social Links */}
                        <div className='mt-4'>
                            <h4>Find Me On</h4>
                            <a href="#" className='fs-2 me-3' style={{ textDecoration: 'none', color: 'white' }}><FaLinkedin /></a>
                            <a href="#" className='fs-2' style={{ textDecoration: 'none', color: 'white' }}><FaGithub /></a>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4">
                            <button className="btn btn-light me-2 "><b>View My Work</b></button>
                            <button className="btn btn-dark me-2">Contact Me</button>
                            <button className="btn btn-dark mt-2">Download CV</button>
                        </div>
                    </div>

                    {/* Right Section (Image) */}
                    <div className='col-12 col-md-6 text-center'>
                        <img src="../Cover_Photo.png" className='img-fluid rounded w-75' alt="My Profile" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;
