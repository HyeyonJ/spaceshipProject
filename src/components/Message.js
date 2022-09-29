import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Message () {

    let navigate = useNavigate()

return(
    <div className="luckyLetter">
        <div style={{ height: "30px" }}></div>
        <Container>
            <Row>
                <Col><img src={process.env.PUBLIC_URL + "/images/letter2.jpg"}
                    width="100%" height="600px"/>
                </Col>
                <Col>
                    <Card>
                        <Card.Body className="luckyLetter2">
                        <p style={{ fontSize:"50px", textAlign:"center"}}>행운의 편지</p>
                        <div style={{ height: "10px" }}></div>
                        <p style={{fontSize:"25px", textAlign:"center"}} >이 편지는 영국에서 최초로 시작되어<br></br>
                            일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고<br></br>
                            지금은 당신에게로 옮겨진 이 미션은<br></br>
                            4일 안에 당신 곁을 떠나야 합니다.<br></br><br></br>

                            <p style={{color:"red"}}>당신은 지구의 수명을 늘려주어야 합니다.
                            </p>
                            혹 미신이라 하실지 모르지만 사실입니다.<br></br>
                            이 미션을 하면 7년의 행운이 있을 것이고<br></br>
                            그렇지 않으면 3년의 불행이 있을 것입니다.<br></br>
                            <br></br>
                            </p>
                        </Card.Body>
                        <Button style={{fontSize:"30px"}} variant="light"
                        onClick={ () => {navigate("/Action")} }
                        >미션하기</Button>
                    </Card>
                </Col>
            </Row>
         </Container>
    </div>

);

}

export default Message 