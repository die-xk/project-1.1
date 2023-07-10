import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header (){
    return(
        <>
            <Navbar expand="lg" bg="dark" variant="light" className="color-nav">
                <Container className ="d-flex justify-content-end">

                    <Navbar.Brand href="#home">
                        <img id='logo' src="src\assets\company-logo.png" alt="" />
                    </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <div className="send-to-left">
                            <Nav className="me-auto">
                                
                                <Nav.Link className='navigation-links' href="#home">Home</Nav.Link>
                                <Nav.Link className='navigation-links' href="#link">Product</Nav.Link>
                                <Nav.Link className='navigation-links' href="#link">Contact</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>


        </>
    )
}

export default Header;