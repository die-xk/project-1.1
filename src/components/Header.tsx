import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header (){
    return(
        <>
            <Navbar expand="lg" bg="dark" variant="light" className="color-nav">
                <Container className ="d-flex">

                    <Navbar.Brand>
                        <img id='logo' src="src\assets\company-logo.png" alt="" />
                    </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                            
                        <div className="send-to-left">
                            <Nav className="me-auto">
                                <Nav.Link className='navigation-links'>
                                    <Link to="/about">About</Link>
                                </Nav.Link>
                                <Nav.Link className='navigation-links'>
                                    <Link to="/contact">Contact</Link>
                                </Nav.Link>
                                <Nav.Link className='navigation-links'>
                                    <Link to="/products">Products</Link>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>


        </>
    )
}

export default Header;