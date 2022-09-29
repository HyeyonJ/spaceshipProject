import './App.css';
import { Button, Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import ReactPlayer from "react-player";
import { useEffect, useState } from 'react'
import { useNavigate, Route, Routes } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import PlanetCard from "./components/PlanetCard.js";
import Mission from "./components/Misson.js";
import Action from "./components/Action.js";
import Todo from "./components/Todo.js";
import SayHi from "./components/SayHi.js";
import Video from "./components/Video.js";
import Introduce from './components/Introduce';
import Notice from "./components/Notice";
import LastTrip from './components/LastTrip';
import Message from './components/Message';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  
  //routes에 관한 선언
  let navigate = useNavigate()
  // sayhi에 관한 코드
  const [sayHi, setSayHi] = useState('');
  let [wordCnt, setWordCnt] = useState(0);
  let [count, setCount] = useState(0);

  const completionWord = 
  ["System login",
   "Hello Captain",
   "This is spaceship Planet-29",
   "Welcome"
   ];

    useEffect(() => {
      const typingInterval = setInterval(() => {
        if(wordCnt > completionWord[count].length ){
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
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <img
            src={process.env.PUBLIC_URL + "/images/icon2.png"}
            width="40px"
            height="40px"
          />
          <Navbar.Brand href="/">Planet-29</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate("/Misson")
            }}>Mission</Nav.Link>
            <Nav.Link onClick={() => {
              navigate("/Action")
            }}>Action</Nav.Link>
            <Nav.Link onClick={() => {
              navigate("/Todo")
            }}>Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
            <div className="planetship29">
              <Video></Video>
              
              <div style={{height:"100px"}}></div>
              <Container>
                <Row>
                  <Col>
                  <h1 className='planet29'><img
                    src={process.env.PUBLIC_URL + "/images/icon2.png"}
                    width="40px" height="40px" 
                    style={{marginLeft:250}}/> Planet-29
                  </h1>
                  <div style={{height:"150px"}}></div>
                  <h1 style={{fontFamily:"monospace"}}>{sayHi}
                  <img src={process.env.PUBLIC_URL + "/images/cursor.jpg"}
                  width="60px" height="50px"/></h1>
                  </Col>
                  <Col>
                  <img src={process.env.PUBLIC_URL + "/images/mouth2.jpg"}
                  width="100%" height="500px"/>
                  </Col>
                </Row>
              </Container>

              <div style={{height:"100px"}}></div>
                <Introduce></Introduce>
                <div style={{height:"150px"}}></div>
                <LastTrip></LastTrip>
                <div style={{height:"150px"}}></div>
                <Notice></Notice>
                {/* <div style={{height:"100px"}}></div>
                <SayHi></SayHi> */}
                <div style={{height:"150px"}}></div>
                <PlanetCard></PlanetCard>
                <div style={{height:"30px"}}></div>
                {/* <ReactPlayer className="player" url={"https://youtu.be/ryYItlvnJzA"} margin="auto"
                  width="100%"  height="600px" controlsplaying={true}/>  */}
            </div>
        }></Route>
        <Route path="/Misson" element={<Mission/>}/>
        <Route path="/Misson/Message" element={<Message/>}/>
        <Route path="/Action" element={<Action/>}/>
        <Route path="/Todo" element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
