import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function LastTrip () {

return (
  <div>
    <h1 style={{marginLeft:500}}>Last trip</h1>
    <div style={{height:"20px"}}></div>
    <Carousel style={{marginLeft:20, width:"97%"}}>
      <Carousel.Item interval={3000}>
        <img src={process.env.PUBLIC_URL + "/images/lastTrip3.jpg"}
         width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>나비 넥타이 성운</h3>
          <p>눈앞에서 펼쳐지는 생생한 컬러감의 향연! 이보다 더 아름다울 수 없다</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={process.env.PUBLIC_URL + "/images/lastTrip2.jpg"}
        width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>토성</h3>
          <p>토성 고리 고드름으로 만들어 먹는 아이스크림 체험! 온 가족이 함께해요</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={process.env.PUBLIC_URL + "/images/lastTrip1.jpg"}
        width="100%" height="600px"/>
        <Carousel.Caption>
          <h3>인터스텔라</h3>
          <p>
            지구인의 영화 인터스텔라, 현존하다
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

}

export default LastTrip