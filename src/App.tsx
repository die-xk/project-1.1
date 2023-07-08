import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header'
import Section1 from './components/Section-1';
import Section2 from './components/Section2';
import Section3 from './components/Section-3';
import Section4 from './components/Section-4';

function App() {
   return (
    <>
      <Container className="containeer">
        
        <Col>
          <Row>
            <Header />
          </Row>

          <Row fluid xs={12} sm={12}>
            
            <div className="with-bg">
              <div className="panel1">
                <Section1 />
              </div>
            </div>

          </Row>

          <Row className='sector-2'>
            <div className="new m-lg-6 mt-5">
              <Section2 />
            </div>
          </Row>

          <Row className='sector-3'>
            <Section3 />  
          </Row>  

          <Row className='sector-4'>
            <Section4 />
          </Row>
        </Col>      
      </Container>
    </>
  )
}

export default App
