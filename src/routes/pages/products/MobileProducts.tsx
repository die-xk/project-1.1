import './MobileProducts.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MobileAbout() {
  return (
    <>
            <Navbar expand="lg" bg="dark" variant="light" className="color-nav clr-mbl">
                    <Container className ="d-flex">

                        <Navbar.Brand >
                            <img className='dsp-for-others' id='logo' src="src\assets\company-logo.png" alt="" />
                            <h1 className='dsp-txt'>Products</h1>
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
        
            <section id="for-src">
                <div className="src-flt-mob">
                    <div className="its"></div>
                    <img id='fiilter' src="src/assets/products/ic_search_24px.png" alt="" />
                </div>
            </section>

            <section className="card-card">
                <div className="card-for-caru"></div>
                <div className="card-for-caru" id='mid'>
                    <div id="poly"></div>
                </div>
                <div className="card-for-caru"></div>
            </section>
                
            <section className="prod-changer">
                <ul id="categories-wheel">
                    <li className="wheel-items">
                        <h4 id='wheel-txt'>
                            Brakes    
                        </h4>
                        <div className="feat-wrp-f">128</div>                        
                    </li>
                    <li className="wheel-items ole">
                        <h4 id='wheel-txt'>
                            Seats
                        </h4>
                        <div className="feat-wrp-f ">14</div>
                    </li>
                    <li className="wheel-items mid">
                        <h4 id='wheel-txt'>
                            Wheels
                        </h4>
                        <div className="feat-wrp-f">213</div>
                    </li>
                    <li className="wheel-items ole">
                        <h4 id='wheel-txt'>
                            Body Kits                       
                        </h4>
                        <div className="feat-wrp-f">434</div>
                    </li>
                    <li className="wheel-items">
                        <h4 id='wheel-txt'>
                            Lights    
                        </h4>
                        <div className="feat-wrp-f">138</div>                        
                    </li>
                </ul>

                <div className="one-line"></div>

                <ul id="categories-list">
                    <li id="types-of-prod">Pirelli</li>
                    <li id="types-of-prod">Michelin</li>
                    <li id="types-of-prod">Sava</li>
                    <li id="types-of-prod">Komo</li>
                    <li id="types-of-prod">Goodyear</li>
                </ul>
            </section>

            


            <section className="proodi">
            <section className='prodp-wrapper'>
                <ul id='product-list'>
                    <li>
                        <div className="sm-productt">
                            <div className="plc-hldr"></div>
                            <p>
                                <h2 id='sm-prd-nm'>
                                    Product
                                </h2>
                                <h3 id='sm-prd-prc'>
                                    $300.00
                                </h3>
                            </p>
                            <div className="shop-cart">

                                <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="sm-productt">
                            <div className="plc-hldr"></div>
                            <p>
                                <h2 id='sm-prd-nm'>
                                    Product
                                </h2>
                                <h3 id='sm-prd-prc'>
                                    $300.00
                                </h3>
                            </p>
                            <div className="shop-cart">

                                <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="sm-productt">
                            <div className="plc-hldr"></div>
                            <p>
                                <h2 id='sm-prd-nm'>
                                    Product
                                </h2>
                                <h3 id='sm-prd-prc'>
                                    $300.00
                                </h3>
                            </p>
                            <div className="shop-cart">

                                <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="sm-productt">
                            <div className="plc-hldr"></div>
                            <p>
                                <h2 id='sm-prd-nm'>
                                    Product
                                </h2>
                                <h3 id='sm-prd-prc'>
                                    $300.00
                                </h3>
                            </p>
                            <div className="shop-cart">

                                <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="sm-productt">
                            <div className="plc-hldr"></div>
                            <p>
                                <h2 id='sm-prd-nm'>
                                    Product
                                </h2>
                                <h3 id='sm-prd-prc'>
                                    $300.00
                                </h3>
                            </p>
                            <div className="shop-cart">

                                <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                            </div>
                        </div>
                    </li>
                </ul>
            </section>
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
    </>
  )
}

export default MobileAbout