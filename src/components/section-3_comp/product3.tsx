import './product3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product3() {
  return (
    <>
        <Container className='proood'>
            <Row>
                <div className="eight"></div>
            </Row>
            <Row className='text-row'>
                <Col>
                    <h2 id='tint'>TINTING SERVICE</h2>
                    <h3 id='tint-price'>$300.00</h3>
                </Col>
                <Col>
                    <div className="shop-cart">

                        <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Product3;