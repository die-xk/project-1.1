import './Section-3.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import App1 from '../components/section-3_comp/car';
import Product3 from './section-3_comp/product3';

function Section3() {
  return (
    <Container id='sector3-padd'>
      <Row>
        <Col xs={12} lg={8}>
          <App1 />
        </Col>
        <Col xs={12} lg={4}> 
          <div className="bg-wrapper">
            <Product3 />
            <Product3 />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Section3;