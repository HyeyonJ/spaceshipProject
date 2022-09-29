import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ReactPlayer from "react-player";

function LuckeyLetter () {

  let navigate = useNavigate()

return (
  <div>
    <h1 style={{ textAlign: "center" }}>Message</h1>
    <div style={{ height: "30px" }}></div>
    <Container onClick={ () => {navigate("/Misson/Message")}} >
      <Row>
        <Col></Col>
        <Col xs={6}>
        <video className="lucky" src="/videos/earthHolo.mp4" typeof="video/mp4" 
            muted="muted" autoPlay="autoPlay" loop="loop" width='100%' 
            height="300px"
            style={{display:'inline-block'}}/></Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
);

}

export default LuckeyLetter