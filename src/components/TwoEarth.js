import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function TwoEarth () {

const [isHover, setIsHover] = useState(false);

return (
  <div>
    <h1 style={{ textAlign: "center" }}>Earth</h1>
    <div style={{ height: "30px" }}></div>
    
    <Container>
      <Row>
        <Col xs={6} md={4} className="nature12">
         <div style={{ height: "30px" }}></div>
         <div 
           onMouseOver={() => {setIsHover(true);}}
           onMouseOut={() => {setIsHover(false);}} >
           <img src={isHover ? process.env.PUBLIC_URL + "/images/gar8.jpg" : 
          process.env.PUBLIC_URL + "/images/nature12.jpg"} alt="arrowRight" 
          width="100%" height="220px" /></div>
          {/* <img
            src={process.env.PUBLIC_URL + "/images/nature12.jpg"}
            width="100%"
            height="220px"
          /> */}
        </Col>
        <Col xs={6} md={4} className="nature14">
        <div 
           onMouseOver={() => {setIsHover(true);}}
           onMouseOut={() => {setIsHover(false);}} >
           <img src={isHover ? process.env.PUBLIC_URL + "/images/gar6.jpg" : 
          process.env.PUBLIC_URL + "/images/nature14.jpg"} alt="arrowRight" 
          width="100%" height="250px" /></div>
          {/* <img
            src={process.env.PUBLIC_URL + "/images/nature14.jpg"}
            width="100%"
            height="250px"
          /> */}
        </Col>
        <Col xs={6} md={4} className="nature1">
         <div style={{ height: "40px" }}></div>
         <div 
           onMouseOver={() => {setIsHover(true);}}
           onMouseOut={() => {setIsHover(false);}} >
           <img src={isHover ? process.env.PUBLIC_URL + "/images/gar7.jpg" : 
          process.env.PUBLIC_URL + "/images/nature1.jpg"} alt="arrowRight" 
          width="100%" height="210px" /></div>
          {/* <img
            src={process.env.PUBLIC_URL + "/images/nature1.jpg"}
            width="100%"
            height="210px"
          /> */}
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <div style={{ height: "20px" }}></div>
      <Row>
        <Col xs={6} className="nature11">
        <div 
           onMouseOver={() => {setIsHover(true);}}
           onMouseOut={() => {setIsHover(false);}} >
           <img src={isHover ? process.env.PUBLIC_URL + "/images/gar9.jpg" : 
          process.env.PUBLIC_URL + "/images/nature11.jpg"} alt="arrowRight" 
          width="100%" height="270px" /></div>
          {/* <img
            src={process.env.PUBLIC_URL + "/images/nature11.jpg"}
            width="100%"
            height="270px"
          /> */}
          <h2 style={{marginLeft:"300px"}}>Two Earth</h2>
        </Col>
        <Col xs={6} >
            <div>
            <video src="/videos/twoEarth3.mp4" typeof="video/mp4" 
            muted="muted" autoPlay="autoPlay" loop="loop" width='100%'
            style={{display:'inline-block'}}/>
            </div>
        </Col>
      </Row>

      <div style={{ height: "20px" }}></div>
      <Row>
        <Col xs={6} md={4} className="gar3">
          <img
            src={process.env.PUBLIC_URL + "/images/gar3.jpg"}
            width="100%"
            height="220px"
          />
          <div style={{ height: "40px" }}></div>
        </Col>
        <Col xs={6} md={4} className="gar4">
          <img
            src={process.env.PUBLIC_URL + "/images/gar4.jpg"}
            width="100%"
            height="250px"
          />
        </Col>
        <Col xs={6} md={4} className="gar5">
          <img
            src={process.env.PUBLIC_URL + "/images/gar5.jpg"}
            width="100%"
            height="210px"
          />
        </Col>
        <div style={{ height: "50px" }}></div>
      </Row>

      {/* <Row>
        <Col sm={4}>sm=4</Col>
        <Col sm={8}>sm=8</Col>
      </Row> */}
    </Container>
  </div>
);

}

export default TwoEarth