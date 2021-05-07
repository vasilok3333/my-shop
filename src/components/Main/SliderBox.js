import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import img1 from "../../assets/POCCO.png";
import img2 from "../../assets/REDMI.png";
import img3 from "../../assets/REDMI10.png";
import img4 from "../../assets/galaxyA.png";
import s from "./Main.module.css";



class SliderBox extends Component {
  render() {
    return (
      <div className={s.carousel}>
        <Carousel className={s.carouselContent} interval={5000}>
          <Carousel.Item>
            <img
              className="block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="block w-100"
              src={img4}
              alt="First slide"
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default SliderBox;
