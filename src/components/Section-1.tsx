import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './section.css'

function Section1 () {
    return(
        <>
            <Container  fluid className="section-wrapper">
                <Col xs={12} sm={12} md={12} lg={6}>
                    <Row xs={12} sm={12}>
                        <Row xs={12} sm={12}>
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


                        <Row>
                            <Col>

                            </Col>
                            <Col xs={12} className="mx-auto mb=xs-6 colona">
                                <Button className='mb-5' variant="primary">Read more</Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row xs={12} sm={12}>
                            <h3 className='text-start'>
                                Find your Car!
                            </h3>  
                            <br />
                            <Form>
                                <Row>
                                    <Col xs={12} xm={12} lg={6} className='mb-2'>
                                        <Form.Control placeholder="Make" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Model"/>
                                    </Col>
                                </Row>
                            </Form>
                            
                            <h5 id='or' className='text-start'>
                                Or
                            </h5>
                            
                            <Button variant="primary" size="lg">
                                Log in
                            </Button>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default Section1;