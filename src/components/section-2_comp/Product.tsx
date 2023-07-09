import './Product.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product() {
  return (
    <div className='wrapper mb-5 p-0 ms-0'>
       <Container>
        <Col>
          <Row className='product-img-cent'>
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
              <img id='stars' src="src\assets\icons\stars.png" alt="" />
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

              <img id='shop-cart-ico' src="src/assets/products/add-to-cart.png" alt="" />

              </div>
            </Col>
          </Row>
        </Col>
       </Container>
    </div>
  )
}

export default Product