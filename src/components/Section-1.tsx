import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './section.css'

function Section1 () {
    return(
        <>
            <Container className="section-wrapper">
                
                <Col>
                    <Row >
                        <Row>
                            <h2 id='title' className="text-start">
                                Find anything you need!
                            </h2>
                        </Row>


                        <Row>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quaerat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda quaerat.
                            </p>
                        </Row>
                    </Row>

                    <br /><br />

                    <Row xs={12} sm={12}>
                        <Col>
                            <Row>
                                <h3 className='text-starti'>
                                    Find your Car!
                                </h3>
                            </Row>  
                            <br />
                            <Row>                                
                                <div className="wrapper-for-inputs">
                                    <div className="input-grid-item">
                                             <Row className='row-for-make'>
                                                <h2 id='make-model'>Make</h2>
                                            </Row>
                                            <Row className='row-of-make row-of-makeing'>
                                                <div className="new-border">
                                                    <img id='arrow-for-filter' src="src\assets\icons\arrow.png" alt="" />
                                                </div>
                                            </Row> 
                                    </div>
                                    <div className="input-grid-item">
                                            <Row className='row-for-make'>
                                                <h2 id='make-model'>Model</h2>
                                            </Row>
                                            <Row className='row-of-make'>
                                                <div className="new-border new-border-new">
                                                    <img id='arrow-for-filter' src="src\assets\icons\arrow.png" alt="" />
                                                </div>
                                            </Row>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <h5 id='or' className='text-start'>
                                    Or
                                </h5>
                            </Row>
                            <Row>
                                <Button className='long-btn' variant="primary" size="lg">
                                    Log in
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default Section1;