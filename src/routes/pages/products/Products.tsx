import MediaQuery from "react-responsive";
import MobileProducts from "./MobileProducts"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../../../components/Header";
import Section4 from "../../../components/Section-4";
import './Products.css'

function Products() {
  return (
    <>
      <Container className="containeer">
          <Col>
            <Row>
              <Header />
            </Row>

            <div className="spacer">
              <Row>
                <div className="product-searching-nav">
                  <Row>
                    <Col>
                      <div className="choose-department">
                        
                      </div>
                    </Col>
                    <Col>2</Col>
                    <Col>3</Col>
                  </Row>
                </div>
              </Row>
            
            </div>
            <Row className="sector-4">
              <Section4 />
            </Row>
          </Col>
        </Container>


        <MediaQuery query="(max-device-width: 576px)">
        <MobileProducts />
    </MediaQuery>
    </>
    
  )
}

export default Products