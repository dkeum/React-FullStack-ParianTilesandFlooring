import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import ServiceData from "../data/ServiceData";
import { Card } from 'react-bootstrap';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Slider = () => {
  return (
    <div className="parent">
    <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {ServiceData.map((servicedata, index) => {

          console.log(servicedata);
          return (
            <Card className="ms-1">
              <Card.Body>
                <div className="slider d-flex justify-content-center" key={index}>
                    <img src={require(`../images/${servicedata.ServiceImage}`)} alt="movie" />
                </div>
              </Card.Body>
              <Card.Title className="d-flex justify-content-center">{`${servicedata.ServiceName}`}</Card.Title>
            </Card>
            
          );
        })}
</Carousel>

    </div>
  );
};
export default Slider;
