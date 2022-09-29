import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import ReactPlayer from "react-player";


function Expect () {

    return (
      <div>
        <Container fluid="md" className="book">
        <Row>
        <Col xs={6}>
        <div style={{height:"100px"}}></div>
        <h1 style={{textAlign:"right"}}>One Earth</h1>
        </Col>
        <Col xs={6}><img src={process.env.PUBLIC_URL + "/images/earth2.jpg"} 
        width="70%" height="300px"/></Col>
        </Row>
        </Container>
      </div>
    );
    
    }
    
    export default Expect



{/* <h1 style={{marginLeft:400}}>OneEarth</h1> */}

/////////////////////// 여러 방법들 시도  /////////////////////////
//     <Container fluid="md" className="book">
//     <Row>
//       <Col>
//       <h1 style={{ textAlign: "left" }}>
//           지구를 여행하는
//           <br />
//           히치하이커를
//           <br />
//           위한 안내서
//       </h1>              
//       <img src={process.env.PUBLIC_URL + "/images/book3.jpg"}
//           width="300px"height="300px"/>
//       <iframe src="https://assets.pinterest.com/ext/embed.html?id=102597697752763591" 
//       height="336" width="236" frameborder="0" scrolling="no" ></iframe>
//       <iframe src="https://assets.pinterest.com/ext/embed.html?id=102597697752763591" 
//       height="300" width="300" frameborder="0" scrolling="no" ></iframe>
//       </Col>
//     </Row>
//   </Container>



/////////////////////// 2 열 ////////////////////////////////////////
{/* <Container>         
{/* Columns are always 50% wide, on mobile and desktop 
    <Row>
        <Col xs={6}>
        <div style={{height:"100px"}}></div>
        <h1 style={{textAlign:"right"}}>지구를 여행하는<br/>히치하이커를<br/>위한 안내서</h1>
        </Col>
        <Col xs={6}><img src={process.env.PUBLIC_URL + "/images/book2.jpg"} 
        width="90%" height="500px"/></Col>
    </Row>
</Container> */}


////////////////////////  그리드를 이용함 ////////////////////////////////////
//     <div>
//     {/* 우리가 기대한 우주인 기대한 지구 */}
//     <div style={{height:"50px"}}></div>
//     <h1 style={{marginLeft:400}}>OneEarth</h1>
//         <Container>
//         {/* Stack the columns on mobile by making one full-width and the other half-width */}
//         <Row>
//             <Col xs={12} md={8}>
//             <img src={process.env.PUBLIC_URL + "/images/nature1.jpg"}
//                 width="100%"
//                 height="250px"/>
//             </Col>
//             <Col xs={6} md={4}>
//             <img src={process.env.PUBLIC_URL + "/images/nature5.jpg"}
//                 width="100%"
//                 height="250px"/>
//             </Col>
//         </Row>

//         {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
//         <Row>
//             <Col xs={6} md={4}>
//             <iframe
//                 src="https://assets.pinterest.com/ext/embed.html?id=54676582966651546"
//                 height="250px"
//                 width="345"
//                 frameborder="0"
//             ></iframe>
//             </Col>
//             <Col xs={6} md={4}>
//             <img src={process.env.PUBLIC_URL + "/images/nature.jpg"}
//                 width="100%"
//                 height="250px"/>
//             </Col>
//             <Col xs={6} md={4}>
//             <img src={process.env.PUBLIC_URL + "/images/nature4.jpg"}
//                 width="100%"
//                 height="250px"/>
//             </Col>
//         </Row>

//         {/* Columns are always 50% wide, on mobile and desktop */}
//         <div style={{height:"20px"}}></div>
//         <Row>
//             <Col xs={6}>                
//             <img src={process.env.PUBLIC_URL + "/images/nature9.jpg"}
//                 width="100%"
//                 height="250px"/></Col>
//             <Col xs={6}>
//             <img src={process.env.PUBLIC_URL + "/images/nature10.jpg"}
//                 width="100%"
//                 height="250px"/>
//             </Col>
//         </Row>
//         </Container>
//   </div>