import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MediaQuery from "react-responsive";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header'
import Section1 from './components/Section-1';
import Section2 from './components/Section2';
import Section3 from './components/Section-3';
import Section4 from './components/Section-4';
import Landing from './routes/phone-pages/Landing';


function App() {
   return (
    <>
      <Container className="containeer">
        
        <Col>

          <Row>
            <Header />
          </Row>

          <Row className='sector-1'>
            
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
          
          <div className="wrap-for-bg-new">
          <Row className='itm sector-3'>
            <Section3 />  
          </Row>  
          <div className="itm shape"></div>
          </div>
          

          <Row className='sector-4'>
            <Section4 />
          </Row>
          

        </Col>      
      </Container>
      <MediaQuery query="(max-device-width: 576px)">
        <Landing />
      </MediaQuery>
    </>
  )
}

export default App 
