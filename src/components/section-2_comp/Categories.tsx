import './Categories.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Categories() {
  return (
    <div className='wrapperi'>
        <Container>
            <Col>
                <Row className='menu-name'>
                    Categories
                </Row>
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Wheels and Tires</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Variables</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Repair Parts</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Performance Parts</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Lighting</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Electronics</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>
                <hr />
                <Row className='item item-1'>
                    <div className="item-wrapper">
                        <h5>Body Parts</h5> <img id='arrow' src="src\assets\icons\arrow.png" alt="arrow" />
                    </div>
                </Row>              
            </Col>
        </Container>
    </div>
  )
}

export default Categories