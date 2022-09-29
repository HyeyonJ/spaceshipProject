import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import ReactPlayer from "react-player";



function SayHi () {
    let navigate = useNavigate()

    const [sayHi, setSayHi] = useState('');
    let [wordCnt, setWordCnt] = useState(0);
    let [count, setCount] = useState(0);
  
    const completionWord = 
    ["Hello Captain",
     "Welcome",
     "choose our journey"];
  
      useEffect(() => {
        const typingInterval = setInterval(() => {
          if(wordCnt > completionWord[count].length){
            setWordCnt(0);
            if(count+1 >= completionWord.length) setCount(0);
            else  setCount(count+1);
          } else {
            setWordCnt(wordCnt + 1);
          } 
          let showStr = completionWord[count].substring(0, wordCnt);
          setSayHi(showStr);
          }, 200);
       
        return () => {
          clearInterval(typingInterval);
        };
        });

    return (
      <div>
        <Container>
          <Row>
            <Col md={4}>
            <img src={process.env.PUBLIC_URL + "/images/women.jpg"} width="70%" height="300px"/>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
            <img src={process.env.PUBLIC_URL + "/images/planet1.jpg"} width="60%" height="200px"/>
            <h1 style={{fontFamily:"fantasy"}}>What's next planet?</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 3 }}>              
            <ReactPlayer className="player" url={"https://youtu.be/ryYItlvnJzA"} 
                margin="auto" width="100%"  height="200px" controlsplaying={true}/> 
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
            <img src={process.env.PUBLIC_URL + "/images/star.jpg"} width="100%" height="300px"/>
            </Col>
          </Row>
            <div style={{height:"20px"}}></div>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{fontFamily:"cursive"}}>{sayHi}
            <img src={process.env.PUBLIC_URL + "/images/cursor.jpg"}
            width="60px" height="50px"/></h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default SayHi;