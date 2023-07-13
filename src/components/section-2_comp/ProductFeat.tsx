import './ProductFeat.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProductFeat() {
  return (
    <Container>
        <Row>
            <Col className='wrapper-for-prod-1'>
                <Row xs={12} sm={12} md={12}>
                    <Col xs={12} sm={12}>
                        
                        <img className="product-wimg" src="src/assets/products/Brakes.png" alt="" />
                        
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        
                        <img className="product-wimg" src="src/assets/products/Lights.png" alt="" />
                        
                    </Col>
                </Row>
                <Row xs={12} sm={12} md={12}>
                    <Col xs={12} sm={12}>
                        
                        <img className="product-wimg" src="src/assets/products/Seats.png" alt="" />
                        
                    </Col>
                    <Col xs={12} sm={12}>
                        
                        <img className="product-wimg" src="src/assets/products/Tires.png" alt="" />
                         
                    </Col>
                </Row>
                
                
                
                               
            </Col>
            <Col className='wrapper-for-sings'>
                    <div className="grid-item">
                        <img className="icon-for-filter" src="src\assets\car-filter-icons\Component 13 (16).png" alt=""/>                        
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (1).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (2).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (3).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (4).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (5).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (6).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (7).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (8).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (9).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (10).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (11).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (12).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (13).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (14).png" alt=""/>
                    </div>
                    <div className="grid-item">
                        <img className='icon-for-filter' src="src\assets\car-filter-icons\Component 13 (15).png" alt=""/>
                    </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default ProductFeat;