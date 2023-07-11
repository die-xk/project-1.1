import './Landing.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../../components/Header';


function Landing() {
  return (
    <>
        <Header />
        <section className='for-bg'>
            <div className="card-one">
                <Container>
                    <Row>
                        <p>
                            <h2 id='comp-name'>Company</h2>
                            <h5 id='comp-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                        </p>
                    </Row>
                    <Row></Row>
                    <Row>
                        <div className="btn-for-hero">
                            Sing up
                        </div>
                    </Row>
                </Container>
                
            </div>
        </section>
        <section className='for-wrapper-bg'>
            <section className='link-ribbon'>
                <ul id='link-id'>
                    <li>
                        nav-link
                    </li>
                    <li id='colored'>
                        nav-link
                    </li>
                    <li>
                        nav-link
                    </li>
                    <li>
                        nav-link
                    </li>
                </ul>
                <div className="grid-for-strip">
                    <div className="grid-pgn"></div>
                    <div className="grid-pgn strip-one">

                    </div>
                    <div className="grid-pgn"></div>
                    <div className="grid-pgn"></div>
                </div>
            </section>
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
                </ul>
            </section>
        </section>
        <section className="filter-sector">
            <h2 id="find-h">
                Find your car!
            </h2>
            <div className="input-wrapping">
                <div className="btn-flt">
                    <h4 id='merc'>
                        Mercedes-Benz
                    </h4>
                    <img id='flt-srch' src="src/assets/products/ic_search_24px.png" alt="" />
                </div>
                <div className="btn-flt">
                    <h4 id='c-c'>
                        C-Class
                    </h4>
                    <img id='flt-arrow' src="src/assets/icons/arrow.png" alt="" />
                </div>
            </div>
            <section className="car-and-years">
                <div className="car-im">
                    <img src="src/assets-mob/img/merc-img.png" alt="" />
                </div>
                <div className="years-slid">
                    <ul id="years">
                        <li>
                            <div className="items-for-yrs two">
                                <div className="line">

                                </div>
                                <h3 id="each">2019</h3>
                            </div>
                        </li>
                        <li>
                            <div className="items-for-yrs three">
                                <div className="line">

                                </div>
                                <h3 id="each">2020</h3>
                            </div>
                        </li>
                        <li>
                            <div className="items-for-yrs four">
                                <div className="line">

                                </div>
                                <h3 id="each">2021</h3>
                            </div>
                        </li>
                        <li>
                            <div className="items-for-yrs five">
                                <div className="line">

                                </div>
                                <h3 id="each">2022</h3>
                            </div>
                        </li>
                        <li>
                            <div className="items-for-yrs six">
                                <div className="line">

                                </div>
                                <h3 id="each">2023</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="prood-p">
                <ul>
                    <li className="ima" id='ima1'>
                        <img src="src/assets/products/Brakes.png" alt="" />
                    </li>
                    <li className="ima" id='ima2'>
                        <img src="src/assets/products/Lights.png" alt="" />
                    </li>
                    <li className="ima" id='ima3'>
                        <img src="src/assets/products/Seats.png" alt="" />
                    </li>
                    <li className="ima" id='ima4'>
                        <img src="src/assets/products/Tires.png" alt="" />
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
};

export default Landing;