import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark bg-opacity-50 fixed-top">
            <Container>
                <Navbar.Brand href="#" style={{color:'white', fontWeight:'700', fontSize:'2rem', }}>ZINO<span className='text-danger'>.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features" className=' fs-6 nav-text'>Home</Nav.Link>
                        <Nav.Link href="#pricing" className=' fs-6 nav-text'>About</Nav.Link>
                        <Nav.Link href="#pricing" className=' fs-6 nav-text'>Skills</Nav.Link>
                        <Nav.Link href="#pricing" className=' fs-6 nav-text'>Contact</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;