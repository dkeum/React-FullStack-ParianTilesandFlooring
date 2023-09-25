import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import axios from "axios"; // Import Axios library

const MainCard = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the server-side endpoint
            const response = await axios.post("/submit-form", formData);

            if (response.data.success) {
                // Handle success, you can show a success message or redirect
                alert("Form submitted successfully!");
                // Reset the form
                setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                });
            } else {
                // Handle failure
                alert("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
        }
    };

    return (
        <div className="position-relative">
            <Card className="border-0">
                <Card.Img src={require("../images/background.jpg")} alt="Card image" style={{ opacity: "0.5" }} />
            </Card>

            <div className="position-absolute top-0 start-0 w-100 h-100">
                <Container fluid className="pt-5" style={{ marginTop: "5%" }}>
                    <Row className="gy-1">
                        <Col xs={12} className="d-flex justify-content-end" md={{ span: 3, offset: 3 }}>
                            <div className="maincard justify-content-center">
                                <Col>
                                    <div className="image-container">
                                    <Image fluid src={require("../images/tiling.jpg")} alt="Image1" />
                                </div>
                                <div className="image-container">
                                    <Image fluid src={require("../images/tiling2.jpg")} alt="Image1" />
                                </div>
                                </Col>
                                <Col>
                                    <div className="image-container">
                                    <Image fluid src={require("../images/tiling.jpg")} alt="Image1" />
                                </div>
                                <div className="image-container">
                                    <Image fluid src={require("../images/tiling2.jpg")} alt="Image1" />
                                </div>
                                </Col>
                                
                                
                            </div>
                        </Col>
                        <Col xs={12} md={6} >
                            <div className="ms-md-5 white-box">
                                <Card.Body className="px-5">
                                    <Card.Text className="text-center text-sm fs-2  fs-md-2 fs-lg-2 fs-xl-2">
                                        <b>Parian Floors and Tiles</b>
                                    </Card.Text>
                                    <Card.Text className="text-center  text-sm fs-2  fs-md-2 fs-lg-2 fs-xl-2">
                                        <b>30 Years of Customer Satisfaction ✓ </b>
                                    </Card.Text>
                                    <Card.Text className="text-center  text-sm fs-2  fs-md-2 fs-lg-2 fs-xl-2">
                                        <b>Tiling and Flooring Expert ✓</b>
                                    </Card.Text>
                                    <Card.Text className="text-center  text-sm fs-2  fs-md-2 fs-lg-2 fs-xl-2">
                                        <b>1000+ projects ✓</b>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center gy-1" style={{ marginTop: "5%" }}>
                        <Col xs={12} md={6}>
                            <Card className="shadow mt-3 mt-md-0 ms-5">
                                <Card.Body>
                                    <div className="mb-3">
                                        <h2 className="fw-bold mb-2 text-uppercase text-center">Get your FREE quote</h2>
                                        <Form className="" onSubmit={handleSubmit}>
                                            <Row className="mb-3">
                                                <Form.Group controlId="formFullName" className="text-center">
                                                    <Form.Label>Your Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter name" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                                                </Form.Group>
                                                <Form.Group controlId="formEmail" className="text-center">
                                                    <Form.Label>Your Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Example@email.com" name="email" value={formData.email} onChange={handleInputChange} required />
                                                </Form.Group>
                                                <Form.Group controlId="formPhoneNumber" className="text-center">
                                                    <Form.Label>Your Phone Number</Form.Label>
                                                    <Form.Control type="number" placeholder="Phone Number (optional)" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
                                                </Form.Group>
                                                <div className="d-grid text-center mt-2">
                                                    <Button variant="primary" type="submit">
                                                        Submit
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MainCard;
