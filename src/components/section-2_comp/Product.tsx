import './Product.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product() {
  return (
    <div className='wrapper mb-5 p-0 ms-0'>
       <Container>
        <Col>
          <Row>
            <img id='image-1' src="src\assets\product-img\pngegg.png" alt="" />
          </Row>
          <Row>
            <Row>
              <h4 id='prod-cate'>PRODUCT CATEGORY</h4>
            </Row>
            <Row>
              <h2 id='prod-name'>PRODUCT NAME</h2>
            </Row>
            <Row className='review-wrapper'>
              <h5 id='review'>453 reviews</h5>
            </Row>
          </Row>
          <Row>
            <Col>
              <h2 id='price'>
                $300.00
              </h2>
            </Col>
            <Col>
              <div className="shop-cart">
                <img width="20" height="20" src="https://img.icons8.com/ios/20/shopping-cart--v1.png" alt="shopping-cart--v1"/>
              </div>
            </Col>
          </Row>
        </Col>
       </Container>
    </div>
  )
}

export default Product