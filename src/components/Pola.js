import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Pola.css";

// import required modules
import { Pagination } from "swiper";


function Pola () {

    // const swiper = new Swiper();

return(
    <div>
        <h1 style={{ textAlign: "center" }}>Polaroid</h1>
        <div style={{ height: "50px" }}></div>
        
        <Swiper
        slidesPerView={4} centeredSlides={true}
        spaceBetween={30} grabCursor={true}
        pagination={{ clickable: true,}}
        modules={[Pagination]} className="mySwiperPola">


        <SwiperSlide className="pola">        
            <img src={process.env.PUBLIC_URL + "/images/pola6.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#도촬 #누가찍어줌 #귀여움</p>
        </SwiperSlide>
        <SwiperSlide className="pola">
            <img src={process.env.PUBLIC_URL + "/images/pola4.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#고뇌 #지구모형 #지구 #지구여행재미있다</p>
        </SwiperSlide>
        <SwiperSlide className="pola">
            <img src={process.env.PUBLIC_URL + "/images/pola9.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#나 #혼자 #놀아보기</p>
        </SwiperSlide>
        <SwiperSlide className="Pola">
            <img src={process.env.PUBLIC_URL + "/images/pola1.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#고양이 #귀여운 #인생샷</p>
        </SwiperSlide>
        <SwiperSlide className="pola">        
            <img src={process.env.PUBLIC_URL + "/images/pola7.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#고영희 #쓰담쓰담</p>
        </SwiperSlide>
        <SwiperSlide className="pola">
            <img src={process.env.PUBLIC_URL + "/images/pola3.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#무중력 #에쿠쿵 #떨어진다 #꽃</p>
        </SwiperSlide>
        <SwiperSlide className="pola">
            <img src={process.env.PUBLIC_URL + "/images/pola5.jpg"}
                width="100%" height="300px" margin="20px"/>
            <div style={{ height: "20px" }}></div>
            <p className="text">#댕댕이 #안녕 #KFC앞</p>
        </SwiperSlide>
      </Swiper>

    </div>
);

}

export default Pola