import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Featuring.css'

function Featuring() {
  return (
    <Container className='feat-wrapper'>
        <Row>
        <Col id='text-left'>
            <Row className='pad'>
                <h2 id='seat'>Seat Covers</h2>
            </Row>
            <Row>
                <h4 id='material'>Leather, Synthetic</h4>
            </Row>
            <Row>
            <div className="shop-cart">
                <img width="20" height="20" src="https://img.icons8.com/ios/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            </div>
            </Row>
        </Col>
        <Col id='padd'>
            image for product
        </Col>
        </Row>
    </Container>
  )
}

export default Featuring;