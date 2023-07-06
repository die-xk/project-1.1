import './section2.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './section-2_comp/Product';
import Categories from './section-2_comp/Categories';
import ProductFeat from './section-2_comp/ProductFeat';

function Section2() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={12} lg={3}>
            <Categories/>
          </Col>
          <Col>
            <Row className='navi-links mt-5'>
              <Col xs={12} lg={3}>
                <span id='what'>WHAT</span><span id='offer'> WE OFFER</span>
              </Col>
              <Col xs={12} lg={3}> <a href="">New Arrivals</a></Col>
              <Col xs={12} lg={3}> <a href=""> Featured </a></Col>
              <Col xs={12} lg={3}> <a href=""> Popular</a></Col>
            </Row>
            <Row className='product-row'>
              <Col>
                <Product/>
              </Col>
              <Col>
                <Product/>
              </Col>
              <Col>
                <Product/>
              </Col>
            </Row>
          </Col>
          <Row id='last-row'>
              <ProductFeat />
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Section2