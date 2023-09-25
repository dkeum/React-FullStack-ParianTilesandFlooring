import React from "react";
import { Container, Row, Col, Card ,Image} from 'react-bootstrap';
import ProjectCard from "./ProjectCard";
import ProjectCardData from "../data/ProjectCardData";

const SecondCard = () => {
    return (
        <div className="position-relative">
            <Card className="border-0">
                <Card.Img src={require("../images/background.jpg")} alt="Card image" style={{ opacity: "0.5" }} />
            </Card>

            <div className="position-absolute top-0 start-0 w-100 h-100">
                <Container fluid className="pt-5" style={{ marginTop: "5%" }}>
                    <Row className="">

                        <Col xs={12} md={6} className="d-flex justify-content-end">
                            <div className="maincard justify-content-center">
                                <div className="">
                                    <Image fluid src={require("../images/tiling.jpg")} alt="Image1" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="maincard d-flex justify-content-center">
                            <div className="ms-md-3">
                                <Card.Body className="px-1 text-center">
                                    <Card.Text className=""><b>Meet David Keum</b></Card.Text>
                                    <Card.Text className=""><b>Started tiling in Australia and have a diverse range of skills. I can and know how to install every type of tile properly and the procedures behind it. I also do levelling for floors.</b></Card.Text>
                                </Card.Body>
                            </div>

                        </Col>
                    </Row>
                    <h1 className="mt-5">Recent Projects</h1>
                    <Row className="mt-5">
                        {ProjectCardData.map((item) =>
                            <Col key={item.id}>
                                <ProjectCard
                                    {...item}
                                />  
                            </Col>
                        )}
                    </Row>
                    
                </Container>
            </div>
        </div>
    );
}

export default SecondCard;
