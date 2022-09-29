import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Event.css";

// import required modules
import { Pagination, Navigation } from "swiper";



function Event () {

return(
    <div>
        <h1 style={{ textAlign: "center" }}>Event</h1>
        <div style={{ height: "50px" }}></div>

        <Swiper pagination={true} 
        modules={[Pagination]} className="mySwiperEvent">

        <div style={{ height: "30px" }}></div>
        <SwiperSlide className="event">
            <div style={{width:'100%'}}>
                <img src={process.env.PUBLIC_URL + "/images/event3.jpg"}
                    width="100%" height="300px"/>
            </div>
            <div className="eventText" style={{width:"200px"}}>
                <p className="eventText">
                <br></br>최고의 
                <br></br>귀요미를 찾아라!
                <br></br>2022.09.27
                <br></br>~2022.12.31</p>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className="event">
            <div>
                <img src={process.env.PUBLIC_URL + "/images/event2.jpg"}
                    width="100%" height="300px"/>
            </div>
            <div className="eventText">
                <p>
                <br></br>소중한 나무　　
                <br></br>한 그루를 
                <br></br>심어주세요
                <br></br>2022.10.01
                <br></br>~2022.11.30</p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="event">
            <div>
            <img src={process.env.PUBLIC_URL + "/images/event4.jpg"}
                width="100%" height="300px"/>
            </div>
            <div className="eventText">
                <p>동물 사랑 캠페인
                <br></br>동물 친구들을 지켜주세요!　　
                <br></br>2022.8.01~2022.12.31</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>

);

}

export default Event