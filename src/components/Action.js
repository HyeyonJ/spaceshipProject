import { Col, Card, Row, Container, foods, Button, ListGroup, Alert} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Garbage from "./Garbage";
import Store from "./Store";
import Cart from "./Cart";

function Action () {

return(
    <div>
        <Store></Store>
        <div style={{ height: "100px" }}></div>

    </div>
);

}

export default Action