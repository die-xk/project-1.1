import './product3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product3() {
  return (
    <div className="wrapper-prod">
        <Container>
            <Row>
                <img height={"90vh"} width={"4rem"} src="" alt="" />
            </Row>
            <Row className='cont-for-row'>
                <Col>
                    <Row>Product Name</Row>
                    <Row>$300.00</Row>
                </Col>
                <Col>
                    <div className="shop-cart">
                        <img width="20" height="20" src="https://img.icons8.com/ios/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Product3;