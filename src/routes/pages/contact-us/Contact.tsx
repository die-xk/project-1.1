import MediaQuery from "react-responsive";
import './Contact.css'
import MobileContact from './MobileContact'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../../../components/Header";
import Section4 from "../../../components/Section-4";

function Contact() {
  return (
      <>
        <Container className="containeer">
          <Col>
            <Row>
              <Header />
            </Row>
            <div className="spaacer">
            <Row>
              <h1 id="pleased">
                We are pleased to get in touch!
              </h1>
            </Row>

            
            <Row id="for-track">
              <Col>
                <h2 id="track">
                  Track your shipment
                </h2>
              </Col>
              <Col>
                <h3 id="ship">
                  Write your shipment number!
                </h3>
                <input type="text" placeholder="Shippment Number" />
              </Col>
             
            </Row>


            <Row className="for-social-btns">
              
              <Col>
                <div className="scl-card-desk">
                  Facebook
                </div>
              </Col>
              <Col>
                <div className="scl-card-desk">
                  Instagram
                </div>
              </Col>
              <Col> 
                <div className="scl-card-desk">
                  Phone
                </div>
              </Col>
              <Col>
                <div className="scl-card-desk">
                  Costumer <br /> Service
                </div>
              </Col>
            </Row>
            </div>
            <Row className="sector-4 addded">
              <Section4 />
            </Row>
          </Col>
        </Container>
        <MediaQuery query="(max-device-width: 576px)">
          <MobileContact />
        </MediaQuery>
      </>
  )
}

export default Contact