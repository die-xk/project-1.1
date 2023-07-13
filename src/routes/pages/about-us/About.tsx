import MediaQuery from "react-responsive";
import MobileAbout from "./MobileAbout";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../../../components/Header";
import Section4 from "../../../components/Section-4";
import './About.css'

function About() {
  return (
    <>
        <Container className="containeer">
          <Col>
            <Row>
              <Header />
            </Row>
            <div className="cont-cont">
              <Row className="map-row">
                <Col>
                  <Row>
                    <h1 id="map-txt">About us</h1>
                  </Row>
                  <Row>
                    <p id="map-prgh">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo amet pariatur voluptatem quis in odit minus ab harum tenetur suscipit velit, at nostrum vel neque voluptas rem sapiente quod voluptatum.
                    </p>
                  </Row>
                  <Row id="call-row">
                    <div id="call-us">
                      <h4 id="call-txt">
                        Call Us
                      </h4>
                    </div>
                  </Row>
                </Col>
                <Col>
                <iframe scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Trub+(Home)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="520" height="400"></iframe><a href='https://maps-generator.com/'></a>
                </Col>
              </Row>

              <Row>
                <h2 id="partner-txt">
                  Our partners
                </h2>
              </Row>
              
              <Row>
                <Col>
                  <div className="prtn-cards">

                  </div>
                </Col>
                <Col>
                  <div className="prtn-cards">

                  </div>
                </Col>
                <Col>
                  <div className="prtn-cards">

                  </div>
                </Col>
                <Col>
                  <div className="prtn-cards">

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
            <MobileAbout />
        </MediaQuery>
    </>
  )
}

export default About