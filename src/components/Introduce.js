import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Introduce () {

return(
    <div>
        <Container>
        <Row>
            <Col><img src={process.env.PUBLIC_URL + "/images/ship3.jpg"}
            width="90%" height="500px"/>
            </Col>
            <Col>
                <Row>
                <h1>Introduce spaceship</h1>
                <div style={{height:"20px"}}></div>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Auto-driving mode</Card.Title>
                            <Card.Text className="introduce">
                            <p className="introText">
                            <img src={process.env.PUBLIC_URL + "/images/intro1.png"}
                            width="50px" height="50px"/>
                            편안한 여행을 위해 와인 한 잔 하면서 비행할 수 있습니다.
                            <br></br>
                            즐거운 여행, 행복한 여행 되세요.
                            </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{height:"20px"}}></div>
                    <Card style={{ width: '100%' }} className="introduceCard">
                        <Card.Body>
                            <Card.Title>Manual mode</Card.Title>
                            <Card.Text className="introduce">
                            <p className="introText">
                            <img src={process.env.PUBLIC_URL + "/images/intro2.png"}
                            width="50px" height="50px"/>
                            긴급 상황 발생 시 수동 모드를 제공합니다. 
                            <br></br>
                            비상시에 사용하세요.
                            </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div style={{height:"20px"}}></div>
                    <Card style={{ width: '100%' }} className="introduceCard2">
                        <Card.Body>
                            <Card.Title>Secret mode</Card.Title>
                            <Card.Text className="introduce">
                            <p className="introText">
                            <img src={process.env.PUBLIC_URL + "/images/intro3.png"}
                            width="50px" height="50px"/>
                            사람의 눈에 띄지 않는 시크릿 모드를 제공합니다.
                            <br></br>
                            혹시라도 들킬 위험에서 벗어나세요.
                            </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </Row>
        </Container>
    </div>
);

}

export default Introduce