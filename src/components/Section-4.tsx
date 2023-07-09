import './Section-4.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section4() {
  return (
    <div className="sector4-wrapper">
    <Container>
        <Row>
            <Col className='last-col' xs={12} lg={7}>
                <Row xs={12}><h1>CONTACT US</h1></Row>
                <Row xs={12}>
                    <div className="link-container">
                        <img className='images-for-links' src="src/assets/products/email.png" alt="image--v1"/> 
                        <h3>123companygmail.com</h3>    
                    </div>                
                </Row>
                <Row xs={12}>
                    <div className="link-container">
                        <img className='images-for-links' src="src/assets/products/location.png" alt="image--v1"/>
                        <h3>Prizren, Kosovo</h3>
                    </div>
                </Row>
                <Row xs={12}>
                    <div className="link-container">
                        <img className='images-for-links' src="src/assets/products/phone-call - Copy.png" alt="image--v1"/>
                        <h3>+383/12-345-678</h3>
                    </div>
                </Row>
            </Col>
            <Col className='newe'>
                <Row><h1>Our Company</h1></Row>

                <Row><a href=""><h3>Team</h3></a></Row>
                <Row><a href=""><h3>Careers</h3></a></Row>
                <Row><a href=""><h3>Partners</h3></a></Row>
                <Row><a href=""><h3>Home</h3></a></Row>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Section4;