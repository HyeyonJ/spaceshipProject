import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Garbage () { //////////////////////////// 수정 필요합니다 //////////////////////////////////

return(
    <div>
    <div style={{height:"20px"}}></div>
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          1 of 3
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
    </div>
);

}

export default Garbage

{
<Container>
  <Row>
    <Col>
    <img src={process.env.PUBLIC_URL + "/images/gar1.jpg"}
                width="100%"
                height="250px"/></Col>
    <Col xs={6}>하하핳</Col>

    <Col>
    <img src={process.env.PUBLIC_URL + "/images/gar3.jpg"}
                width="100%"
                height="250px"/></Col>
  </Row>
  <div style={{height:"20px"}}></div>
  <Row>
    <Col>
    <img src={process.env.PUBLIC_URL + "/images/gar2.jpg"}
                width="100%"
                height="250px"/></Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
}