import React from "react";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const ThirdCard = () => {
    return (


        <div className="position-relative">

           
            <Card className="border-0">
                <Card.Img src={require("../images/background.jpg")} alt="Card image" style={{ opacity: "0.5" }} />
            </Card>

            <div className="position-absolute top-0 start-0 w-100 h-100">
                <h1 className="ms-5 mt-5"><u>My Services</u></h1>
                <Container fluid className="pt-5" style={{ marginTop: "5%" }}>
                    <Row>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container">
                                <Image fluid src={require("../images/tiling.jpg")} alt="Image1" />
                            </div>
                            <div className="ms-md-3">
                                <Card.Body className="px-1 text-center" >
                                    <Card.Text className="fs-6"><b>Leveling</b></Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container">
                                <Card.Img src={require("../images/tiling2.jpg")} />
                            </div>
                            <div className="ms-md-3">
                                <Card.Body className="px-1 text-center">
                                    <Card.Text className=""><b>Tiling</b></Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5"> 
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container">
                                <Image fluid src={require("../images/tiling.jpg")} alt="Image1" />
                            </div>
                            <div className="ms-md-3">
                                <Card.Body className="px-1 text-center" >
                                    <Card.Text className="fs-6"><b>Flooring</b></Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                            <div className="image-container">
                                <Card.Img src={require("../images/tiling2.jpg")} />
                            </div>
                            <div className="ms-md-3">
                                <Card.Body className="px-1 text-center">
                                    <Card.Text className=""><b>Design Tile Layout</b></Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ThirdCard;
