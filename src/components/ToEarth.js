import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import Expect from "./Expect";

function ToEarth () {

return (
  <div>
    {/* ToEarth 영상 */}
    <video src="/videos/toEarth3.mp4" typeof="video/mp4" 
    muted="muted" autoPlay="autoPlay" loop="loop" width='100%'
    style={{display:'inline-block'}}/>
  </div>
);

}

export default ToEarth