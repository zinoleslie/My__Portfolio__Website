import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer mt-5 py-4 text-center">
            <div className="container">
                <Nav className="justify-content-center mb-3">
                    <Nav.Item>
                        <Nav.Link href="#top" className="footer-link">Back to Top</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="social-icons">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </a>
                </div>

                <p className="mt-3">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
