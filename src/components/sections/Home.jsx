import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section style={{ height: '100vh',  width: '100%',backgroundColor:'#0a0a0a', color:'white' }}>
            <div className='container d-flex justify-content-between' style={{padding:"100px 20px"}} >
                <div className='d-flex flex-column ' style={{width:'50%', margin:'auto 15px'}}>
                    <div>
                        <h1>Hello, I'm Zino Leslie</h1>
                        <p>I'm a passionate Full-Stack Software Developer with expertise in modern web technologies like JavaScript, React, Node.js, Express, and MongoDB. I specialize in building scalable, high-performance applications with sleek, responsive interfaces and powerful backends. From concept to deployment, I transform ideas into seamless digital experiences. Let’s build something incredible together!</p>
                    </div>

                    <div className='mt-5'>
                        <h3>find Me On</h3>
                        <a href="" className='fs-2 me-2' style={{textDecoration:'none', color:'white'}}><FaLinkedin/></a>
                        <a href="" className='fs-2 ' style={{textDecoration:'none', color:'white'}}><FaGithub/></a>
                        {/* <button>Github</button> */}
                    </div>

                    <div className=" mt-5">
                        <button className="btn btn-light me-2"><b>View My Work</b></button>
                        <button className="btn btn-dark me-2">Contact Me</button>
                        <button className="btn btn-dark me-2">Downmload CV</button>
                    </div>

                </div>
                <div>
                    <img src="../Cover_Photo.png" className='w-200 h-80 img-fluid' alt="my profile image" />
                </div>
            </div>
        </section>
    )
}

export default Home