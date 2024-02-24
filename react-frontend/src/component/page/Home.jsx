import React from "react";
import "../../style/Home.css";
import SliderCarousel from "../components/carousel";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return(
    <section className="main-content">
      <SliderCarousel />
      <CallToAction />
    </section>
  );
};


export default HomePage;

