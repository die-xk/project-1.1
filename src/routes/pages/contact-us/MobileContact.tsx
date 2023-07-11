import './MobileContact.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

function MobileContact() {
  return (
    <>   
        <div className="bg-for-cont">
        <Navbar expand="lg" bg="dark" variant="light" className="color-nav clr-mbl">
                <Container className ="d-flex">

                    <Navbar.Brand >
                        <img className='dsp-for-others' id='logo' src="src\assets\company-logo.png" alt="" />
                        <h1 className='dsp-txt'>Contact us</h1>
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
        
        <section id="links-for-sc">
            <h2 id="pleased">
                We are pleased to get in touch!
            </h2>
            <div className="social-links">
                <div id="fr-logo">

                </div>
                <h4 className="fr-txt">
                    Mail Us
                </h4>
            </div>
            <div className="social-links">
                <div id="fr-logo">

                </div>
                <h4 className="fr-txt">
                    Follow us
                </h4>
            </div>
            <div className="social-links">
                <div id="fr-logo">

                </div>
                <h4 className="fr-txt">
                    Follow us
                </h4>
            </div>
            <div className="social-links">
                <h4 className="fr-txt">
                    Costumer Service
                </h4>
            </div>
        </section>

        <section id="for-sc">
            <h2 id="ttxt">
                Visit our store here!
            </h2>
            <div className="img-cont-wrp">

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

export default MobileContact