import React from "react";
import { Container, Row, Col, Card} from 'react-bootstrap';
import Slider from "./Slider";

const ThirdCard = () => {
    return (

       
        <div className="position-relative">

           
            <Card className="border-0">
                <Card.Img src={require("../images/background.jpg")} alt="Card image" style={{ opacity: "0.5" }} />
            </Card>

            <div className="position-absolute top-0 start-0 w-100 h-100">
                <h1 className="ms-5 mt-5"><u>My Services</u></h1>
                <Container className="pt-5" style={{ marginTop: "2%" }}>
                    <Row className="">
                        <Col className="d-flex justify-content-center">
                            <Slider/>
                        </Col>   
                    </Row>
                    <Row className="mt-3">
                        <Col className="d-flex justify-content-center">
                            <Slider/>
                        </Col>   
                    </Row>               
                </Container>
            </div>
        </div>
    );
}

export default ThirdCard;
