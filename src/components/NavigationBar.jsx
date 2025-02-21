import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark bg-opacity-50 fixed-top">
            <Container>
                <Navbar.Brand href="#" style={{color:'white', fontWeight:'700', fontSize:'2rem'}}>ZINO<span className='text-danger'>.</span></Navbar.Brand>
                
                {/* Updated Navbar Toggle with custom class */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="home" smooth={true} duration={100} className='fs-6 nav-text'>About</Nav.Link>
                        <Nav.Link as={Link} to="projects" smooth={true} duration={100} className='fs-6 nav-text'>Projects</Nav.Link>
                        <Nav.Link as={Link} to="skills" smooth={true} duration={100} className='fs-6 nav-text'>Skills</Nav.Link>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={100} className='fs-6 nav-text'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
