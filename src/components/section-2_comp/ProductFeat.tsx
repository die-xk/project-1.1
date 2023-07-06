import './ProductFeat.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Featuring from './ProductFeat_comp/Featuring';
import Sings from './ProductFeat_comp/Sings';

function ProductFeat() {
  return (
    <Container>
        <Row>
            <Col lg={7}>
                <Container>
                    <div className="ne">
                    <Row xs={12} lg={6}>
                        <Col xs={12} md={6} lg={6}><Featuring /></Col>
                        <Col xs={12} md={6} lg={6}><Featuring /></Col>
                    </Row>
                    <Row xs={12} lg={6}>
                        <Col xs={12} md={6} lg={6}><Featuring /></Col>
                        <Col xs={12} md={6} lg={6}><Featuring /></Col>
                    </Row>
                    </div>
                </Container>
            </Col>
            <Col>
                <Sings />
            </Col>
        </Row>
    </Container>
  )
}

export default ProductFeat;