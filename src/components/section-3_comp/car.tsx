import React from 'react';
import Product360View from './Product360View';
import './car.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App1: React.FC = () => {
  const productImages = [
    <img src="src/assets/360/car (3).png" alt="" />,
    <img src="src/assets/360/car (2).png" alt="" />,
    <img src="src/assets/360/car (1).png" alt="" />,
    <img src="src/assets/360/car (4).png" alt="" />
    // Add more image URLs here for other angles
  ];

  return (
    <>
      <Container>
        <Col>
          <Row className='js-ct'>
            <h1 id='Our-new'>TRY OUR NEW <span id='View-Text' >360 VIEW</span> TECHNOLOGY</h1>
          </Row>
          <Row>
            <div className="some-pad">
              <Product360View images={productImages} />
            </div>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default App1;
