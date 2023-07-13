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
        <Col xs={12} lg={4} className='bg-bg-wrapper'> 
          <div className="bg-wrapper">
            <Container>
              <Row><Product3 /></Row>
              <Row><Product3 /></Row>
              <Row>
                  <div className="pgn">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="circle circle-3"></div>
                  </div>
              </Row>
            </Container>
            
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Section3;