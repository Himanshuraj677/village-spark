import React from "react";
import image1 from "../../img/job1.jpg";
import image2 from "../../img/job2.jpg";
import image3 from "../../img/job3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/job.css"
import { Carousel } from "react-responsive-carousel";
const CarouselComp = () => {
  return (
    <div className="carousel">
      <Carousel>
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
