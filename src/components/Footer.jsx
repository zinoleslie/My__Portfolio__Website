import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer mt-5 py-4 text-center">
            <div className="container">
                <Nav className="justify-content-center mb-3">
                    <Nav.Item>
                        <Nav.Link href="#top" className="footer-link fs-6 fw-bold"style={{color:'rgb(205, 225, 255)'}} >Back to Top</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="social-icons">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon fs-3  text-white "/>
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon fs-3 ms-2 text-white" />
                    </a>
                </div>

                <p className="mt-3">© {new Date().getFullYear()} ZinoLeslie. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
