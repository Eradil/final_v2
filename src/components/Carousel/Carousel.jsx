import { Carousel } from "antd";
import React from "react";
import "./Carousel.css";

const CarouselHome = () => {
  return (
    <div className="carousel">
      <Carousel autoplay className="carousel_inner">
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="http://foto.kg/uploads/posts/2013-01/1357900950_1.jpg"
            alt="фото"
          />
          <h3 className="carousel_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            doloremque distinctio accusantium incidunt, error odit sequi est
            quis omnis dicta, eveniet soluta aperiam consequuntur, voluptatibus
            minus atque tempora veniam voluptates!
          </h3>
        </div>
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMAdH8OFHbHTGbd49O3ON3ssJa22weqBNipxJHBDEH_sNqrT_ILC1WvWwCO3TIHOzx3M&usqp=CAU"
            alt="фото"
          />
          <h3 className="carousel_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            doloremque distinctio accusantium incidunt, error odit sequi est
            quis omnis dicta, eveniet soluta aperiam consequuntur, voluptatibus
            minus atque tempora veniam voluptates!
          </h3>
        </div>
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2cBRMi74EZ-jdoTnj7qbUNFEtmeaOsIsMWgrTSLX3UhONxmjXg7oSpcV1n-1ZkbcNWc&usqp=CAU"
            alt="фото"
          />
          <h3 className="carousel_txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            doloremque distinctio accusantium incidunt, error odit sequi est
            quis omnis dicta, eveniet soluta aperiam consequuntur, voluptatibus
            minus atque tempora veniam voluptates!
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
