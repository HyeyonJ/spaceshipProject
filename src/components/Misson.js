import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ReactPlayer from "react-player";
import Expect from "./Expect";
import ToEarth from "./ToEarth";
import LuckeyLetter from "./LuckyLetter";
import TwoEarth from "./TwoEarth";

function Misson () {

return (
  <div>
    {/* 우주에서 지구로 들어가는 영상 */}
    <ToEarth></ToEarth>

    {/* 우리가 기대한 우주인 기대한 지구 Comp: Expect one earth로 바꿈*/}
    <div style={{height:"100px"}}></div>
    <TwoEarth></TwoEarth>
    
    <div style={{height:"100px"}}></div>
    <LuckeyLetter></LuckeyLetter>
    <div style={{height:"50px"}}></div>
  </div>
);

}

export default Misson