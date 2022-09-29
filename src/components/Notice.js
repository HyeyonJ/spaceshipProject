import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Notice () {

let navigate = useNavigate()

return(
    <div>
    <Container>
        <Row>
        <Col></Col>
        <Col xs={3}>
            <div style={{height:"30px"}}></div>
            <h2 style={{marginLeft:150}}>Notice</h2>
            <div style={{height:"10px"}}></div>
            <img src={process.env.PUBLIC_URL + "/images/noti10.jpg"}
            width="100%" height="260px"/></Col>
        <Col xs={5}>
            <h2>Campaign</h2>
            <div style={{height:"10px"}}></div>
            <img className="campaign" src={process.env.PUBLIC_URL + "/images/noti11.jpg"}
            width="90%" height="400px" onClick={() => {navigate("/Todo")}}/></Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
);

}

export default Notice

