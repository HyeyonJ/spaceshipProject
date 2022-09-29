import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

import "./Support.css";

function Support () {

return(
    <div>
    <h1 style={{ textAlign: "center" }}>Support</h1>
    <div style={{ height: "50px" }}></div>

    <Container>
      <Row>
        <Col xs>
            <div className="support">
            <a href='https://campaign.wwfkorea.or.kr/FY21Polarbear_emforce?
            utm_source=google_pc&utm_medium=cpc&utm_campaign=fy21polarbear&utm_term=WWF&gclid
            =CjwKCAjwvsqZBhAlEiwAqAHElVs_ISBgI4hEgqapMaaQuvQpVW_IKBhsJBW3Eb-HUHC-IrWbS70lHBoCsKw
            QAvD_BwE ' target='_blank'><Card body>
                <img src={process.env.PUBLIC_URL + "/images/support1.png"}
                    width="100%" height="300px" margin="20px"/>
            </Card>
            </a>
            </div>
        </Col>
        <Col xs={{ order: 12 }}>
            <div className="support">
            <a href='https://www.greenpeace.org/korea/' target='_blank'>
            <Card body>
                <img src={process.env.PUBLIC_URL + "/images/support2.jpg"}
                    width="100%" height="300px" margin="20px"/>
            </Card>
            </a>
            </div>
        </Col>
        <Col xs={{ order: 1 }}>
            <div className="support">
            <a href='https://www.unicef.or.kr/what-we-do/building-future/climate-change/' 
            target='_blank'>
            <Card body>
                <img src={process.env.PUBLIC_URL + "/images/support3.jpg"}
                    width="100%" height="300px" margin="20px"/>
            </Card>
            </a>
            </div>
        </Col>
      </Row>
    </Container>
    </div>

);

}

export default Support