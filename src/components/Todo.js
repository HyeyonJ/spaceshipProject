import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Pola from "./Pola.js";
import Event from "./Event.js";
import FollowUs from "./Support.js";
import Support from "./Support.js";

function Todo () {

return(
    <div>
        <video src="/videos/backTo.mp4" typeof="video/mp4" 
        muted="muted" autoPlay="autoPlay" loop="loop" width='100%' 
        style={{display:'inline-block'}}/>

    <div style={{ height: "100px" }}></div>
    <Pola></Pola>

    <div style={{ height: "100px" }}></div>
    <Event></Event>

    <div style={{ height: "100px" }}></div>
    <Support></Support>
    <div style={{ height: "100px" }}></div>
    </div>

);

}

export default Todo