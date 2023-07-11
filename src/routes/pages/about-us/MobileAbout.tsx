import './MobileAbout.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MobileAbout() {
  return (
    <>
        <div className="bg-for-abt">
        <Navbar expand="lg" bg="dark" variant="light" className="color-nav clr-mbl">
                <Container className ="d-flex">

                    <Navbar.Brand >
                        <img className='dsp-for-others' id='logo' src="src\assets\company-logo.png" alt="" />
                        <h1 className='dsp-txt'>About us</h1>
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
                                    <Link to="/contact">Products</Link>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                
                </Container>
        </Navbar>
        
            <section className="two-prgh">
                <p id='prgh-m'>
                    <h3 id='t-m'>
                    It is a long established fact that 
                    a reader will be distracted by the 
                    readable content of a page when 
                    looking at its layout.
                    </h3>
                </p>
                <p id='prgh-s'>
                    <h4 id='t-s'>
                    "The point of using Lorem Ipsum 
                    is that it has a more-or-less normal 
                    distribution"
                    </h4>
                </p>
            </section>

            <section className="partners-mlb">
                <h4 id="meet-row">
                    Meet our partners!
                </h4>
                <div className="partner-dsp-mlb">
                    <div className="partner-wrp"></div>
                    <div className="partner-wrp"></div>
                    <div className="partner-wrp"></div>
                    <div className="partner-wrp"></div>
                    <div className="partner-wrp"></div>
                </div>
            </section>
            <section className="last-part-mob">
                <div className="item-for-nav">
                    <h3 id='nmr1'>About us</h3>
                    <h3 className='plus'>+</h3>
                </div>
                <div className="line-switcher"></div>
                <div className="item-for-nav">
                    <h3 id='nmr2'>Contact</h3>
                    <h3 className='plus'>+</h3>
                </div>
                <div className="line-switcher"></div>
                <div className="item-for-nav">
                    <h3 id='nmr3'>Products</h3>
                    <h3 className='plus'>+</h3>
                </div>
                <div className="line-switcher"></div>
                <div className="item-for-nav">
                    <h3 id='nmr4'>Terms and Privacy</h3>
                    <h3 className='plus'>+</h3>
                </div>
                <div className="line-switcher"></div>
            </section>
        </div>
    </>
  )
}

export default MobileAbout