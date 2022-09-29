import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';


function PlanetCard () {

    let navigate = useNavigate()

    let [planets, setplanets] = useState([
        {
            id:'tv001',
            itemName:'Mars',
            content:"Planet-Mars",
            price: "2,000 광년",
            imgPath: " "
        },
        {
            id:'tv002',
            itemName:'Venus',
            content:"Planet-Venus",
            price: "3,000 광년",
            imgPath: " "
        },
        {
            id:'tv003',
            itemName:'Earth',
            content:"Planet-Earth",
            price: "7,000 광년",
            imgPath: " "
        }
        ]);

        // const [show, setShow] = useState(true);
        // if (show) {
        //   return (
        //     <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        //       <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        //       <p>
        //         Change this and that and try again. Duis mollis, est non 
        //       </p>
        //     </Alert>
        //   );
        // }

        return (
          <div>
            <h1 style={{ textAlign: "center" }}>Choose Journey</h1>
            <div style={{ height: "50px" }}></div>
            <Container>
              <Row sm={1} md={3}>
                <Col>
                  <Card style={{ width: "20rem" }} className="pCard" onClick={()=>
                  {alert('지구를 선택하세요')}}>
                  <Card.Img variant="center" src={process.env.PUBLIC_URL + "/images/1Mars.jpg"}
                    width="318px"  height="300px" />
                    <Card.Body>
                      <Card.Title style={{marginLeft:"100px"}}>Mars</Card.Title>
                      <div style={{ height: "10px" }}></div>
                      <Card.Text>
                        <p className="planetText" style={{textAlign:"center"}}>
                        우주선으로 부터 290,000,000 광년
                        <br></br>
                        여행상품 : 화성 흙으로 만든 드림캐쳐
                        </p>
                      </Card.Text>
                      {/* <Button variant="light" onClick={() =>
                      setShow(true)}>click to Travel</Button> */}
                      {/* <Button variant="light">click to Travel</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col>
                  <Card style={{ width: "20rem" }} className="pCard" onClick={()=>
                  {alert('지구를 선택하세요')}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/2Venus.jpg"}
                    width="318px"  height="300px" />
                    <Card.Body>
                      <Card.Title style={{marginLeft:"100px"}}>Venus</Card.Title>
                      <div style={{ height: "10px" }}></div>
                      <Card.Text>
                        <p className="planetText" style={{textAlign:"center"}}>
                        우주선으로 부터 590,000,000 광년
                        <br></br>
                        여행상품 : 금성에서 발굴한 보석사탕
                        </p>
                      </Card.Text>
                      {/* <Button variant="light">click to Travel</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
                
                <Col>
                  <Card style={{ width: "20rem" }} className="pCard"
                  onClick={ () => {navigate("/Misson")}}
                  >
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/3earth.jpg"}
                    width="318px"  height="300px" />
                    <Card.Body>
                      <Card.Title style={{marginLeft:"100px"}}>Earth</Card.Title>
                      <div style={{ height: "10px" }}></div>
                      <Card.Text>
                        <p className="planetText" style={{textAlign:"center"}}>
                        우주선으로 부터 890,000,000 광년
                        <br></br>
                        여행상품 : 폴라로이드 사진
                        </p>
                      </Card.Text>
                      {/* <Button variant="light" onClick={ () => {
                          navigate("/Misson")
                      }}>click to Travel</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            
            </Container>
          </div>
        );


}

export default PlanetCard;