import { Col, Card, Row, Container, foods, Button, ListGroup, Alert, Table} from "react-bootstrap";
import {Navigate, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Store() {

    const [stores, setStores] = useState([
        {
            title: "텀블러 사용하기",
            text: "텀블러를 사용해서 플라스틱을 줄여주세요",
            life: 3,
            src: "/images/market1.jpg"
        },
        {
            title: "장바구니 사용하기",
            text: "비닐 봉지 대신 장바구니를 사용해주세요",
            life: 2,
            src: "/images/market2.jpg"
        },
        {
            title: "대나무 칫솔 사용하기",
            text: "플라스틱 칫솔 대신 대나무 칫솔을 사용해주세요",
            life: 5,
            src: "/images/market3.jpg"
        },
        {
            title: "스테인리스 빨대 사용하기",
            text: "플라스틱 대신 스테인리스, 곡물, 대나무 빨대를 사용해주세요",
            life: 1,
            src: "/images/market4.jpg"
        },
        {
            title: "전자책 사용하기",
            text: "종이책 대신 전자책을 사용해서 책을 읽어주세요.",
            life: 5,
            src: "/images/market5.jpg"
        },
        {
            title: "리필 제품 사용하기",
            text: "리필 제품을 사용하여 샴푸나 트리트먼트를 사용해주세요.",
            life: 3,
            src: "/images/market6.jpg"
        },
        {
            title: "배출 쓰레기 줄이기",
            text: "쓰레기들을 분리수거 해주시고, 쓰레기의 양을 줄여주세요",
            life: 2,
            src: "/images/market7.jpg"
        },
        {
            title: "전기 코드 뽑기",
            text: "사용하지 않는 전기 코드 들을 뽑아주세요.",
            life: 2,
            src: "/images/noti7.jpg"
        },
        {
            title: "수질 오염 방지",
            text: "수질 오염 방지를 위해서 샴푸 대신 소프넛 등을 사용해주세요.",
            life: 1,
            src: "/images/market9.jpg"
        }
    ]);



    let [carts, setCarts] = useState([ ]);
    
    let [add, setAdd] = useState(0);

    let navigate = useNavigate();


    return (
      <div className="topStore">
        <img
          className="d-block w-100"
          alt="Third slide"
          src={process.env.PUBLIC_URL + "/images/store8.jpg"}
          width="80%"
          height="500px"
        />

        <div style={{ height: "100px" }}></div>
        <h1 style={{ textAlign: "center" }}>Store</h1>
        <div style={{ height: "20px" }}></div>

        {stores.map(function (data, i) {
          return (
            <div className="store">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + data.src}
                  width="100%"
                  height="250px"
                  margin="20px"
                />
                <Card.Body>
                  <Card.Title><p className="storeText">{data.title}</p></Card.Title>
                  <Card.Text>
                    {data.text}
                    <div style={{ height: "10px" }}></div>
                    <p style={{ fontColor: "red" }} className="storeLifeText">
                      지구수명: + {data.life} 년
                    </p>
                  </Card.Text>
                  <Button
                    variant="light"
                    className="storeButton"
                    onClick={() => {
                      // let temp = [...carts]
                      // temp.push(data);
                      // setCarts(temp);
                      setCarts([...carts, data]);
                      setAdd(add + data.life);
                    }}
                  >
                    장바구니
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}

        <div style={{ height: "100px" }}></div>
        <h1 style={{ textAlign: "center" }}>Cart</h1>
        <div style={{ height: "50px" }}></div>

        <Table bordered className="cartTable">
          <thead>
            <tr className="tableMainText">
              <th>사진</th>
              <th width="600px">상품정보</th>
              <th>수명</th>
            </tr>
          </thead>
          <tbody className="tableMainInText">
            {carts.map(function (data, i) {
              return (
                <>
                  <tr>
                    <td rowSpan={2} width="250px" height="220px">
                      <img
                        src={process.env.PUBLIC_URL + data.src}
                        width="200px"
                        height="200px"
                        margin="auto"
                      ></img>
                    </td>
                    <td >
                    {data.title}　　　
                      <Button
                        variant="light"
                        onClick={() => {
                          // 혜연아. 삭제 버튼을 눌렀을 때 carts 리스트에서 해당 객체 지워줘
                          let temp = [...carts];
                          temp.splice(i, 1);
                          setCarts(temp);
                          setAdd(add - data.life);
                        }}
                      >
                        X
                      </Button>
                    </td>
                    <td rowSpan={2}>{data.life} 년</td>
                  </tr>
                  <tr>
                    <td>{data.text}</td>
                  </tr>
                </>
              );
            })}
            <tr>
              <td colSpan={2}>총계</td>
              <td>{add} 년</td>
            </tr>
          </tbody>
        </Table>

        <div style={{ height: "100px" }}></div>
        <h1 style={{ textAlign: "center" }}>Action</h1>
        <div style={{ height: "50px" }}></div>
        <Card className="actionCard">
            <Card.Body><p className="actionText">총 지구 추가 수명 = <span
            style={{color:"red"}}>{add} 년</span>　　　
          <Button variant="light" onClick={()=>
            {alert(`감사합니다. 당신의 행동으로 인해 지구의 수명이 ${add}년 늘었습니다.`)
            navigate("/Todo")}
            }
            >실천하기 </Button></p></Card.Body>
        </Card>
      
      </div>
    );
    }


export default Store



            {/* {
            carts.map(function(data, i) {
                return(  
                    <div className="store">
                        
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + data.src}
                    width="100%" height="250px" margin="20px"/>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                        {data.text}
                        <div style={{ height: "10px" }}></div>
                        <p style={{fontColor:"red"}}>지구수명: + {data.life} 년</p>
                        </Card.Text>
                        <Button variant="light" className="storeButton">장바구니</Button>
                    </Card.Body>
                    </Card>
                </div>
                )
            })            
        } */}


////////////////////////// 하드코딩 스토어 페이지 /////////////////////////////

{/* <Container>
<Row>
  <Col xs>
    <div className="store">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market1.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>텀블러 사용하기</Card.Title>
          <Card.Text>
            텀블러를 사용해서 플라스틱을 줄여주세요
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
           <Button variant="light">상세보기</Button> 
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 12 }}>
    <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market2.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>장바구니 사용하기</Card.Title>
          <Card.Text>
            비닐 봉지 대신 장바구니를 사용해주세요
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 1 }}>
  <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market3.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>대나무 칫솔 사용하기</Card.Title>
          <Card.Text>
            플라스틱 칫솔 대신 대나무 칫솔을 사용해주세요
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
</Row>

<div style={{ height: "50px" }}></div>
<Row>
  <Col xs>
    <div className="store">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market4.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>스테인리스 빨대 사용하기</Card.Title>
          <Card.Text>
            플라스틱 대신 스테인리스, 곡물, 대나무 빨대를 사용해주세요
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 11 }}>
    <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market5.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>전자책 사용하기</Card.Title>
          <Card.Text>
            종이책 대신 전자책을 사용해서 책을 읽어주세요.
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
          </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 2 }}>
  <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market6.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>리필 제품 사용하기</Card.Title>
          <Card.Text>
            리필 제품을 사용하여 샴푸나 트리트먼트를 사용해주세요.
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
</Row>

<div style={{ height: "50px" }}></div>
<Row>
  <Col xs>
    <div className="store">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market7.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>배출 쓰레기 줄이기</Card.Title>
          <Card.Text>
            쓰레기들을 분리수거 해주시고, 쓰레기의 양을 줄여주세요
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 11 }}>
    <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/noti7.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>전기 코드 뽑기</Card.Title>
          <Card.Text>
            사용하지 않는 전기 코드 들을 뽑아주세요.
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
  <Col xs={{ order: 2 }}>
  <div className="store">
    <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/market9.jpg"}
        width="100%" height="250px" margin="20px"/>
        <Card.Body>
          <Card.Title>수질 오염 방지</Card.Title>
          <Card.Text>
            수질 오염 방지를 위해서 샴푸 대신 소프넛 등을 사용해주세요.
            <div style={{ height: "10px" }}></div>
            <p style={{fontColor:"red"}}>지구 수명: + 500년</p>
          </Card.Text>
          <Button variant="light">장바구니</Button>
        </Card.Body>
      </Card>
    </div>
  </Col>
</Row>
</Container> */}




{/* <Carousel variant="dark">
{/* <Carousel.Item>
    <img className="d-block w-100" alt="First slide"
    src={process.env.PUBLIC_URL + "/images/store3.jpg"}
    width="80%" height="500px"/>
        <Carousel.Caption>
        <h2>시간을 바꾸는 상점</h2>
        <h3>지구를 바꿔 주세요</h3>
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img className="d-block w-100" alt="Second slide"
    src={process.env.PUBLIC_URL + "/images/store2.jpg"}
    width="80%" height="500px"/>
        <Carousel.Caption>
        <h2>앞으로 우리가 해야할 일들</h2>
        <h3>우리가 앞으로 나아가야할 방향</h3>
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"  alt="Third slide"
    src={process.env.PUBLIC_URL + "/images/store4.jpg"}
    width="80%" height="500px"/>
        <Carousel.Caption>
        <h2>시간을 바꾸는 상점</h2>
        <h3>우리가 앞으로 나아가야할 방향</h3>
        </Carousel.Caption>
</Carousel.Item>
</Carousel> */}

