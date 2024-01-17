import "../../style/farming.css";
import Carousel from "react-bootstrap/Carousel";
import farmingImage from "../../img/farming.jpg";
import farmingImage1 from "../../img/farming1.webp";
import farmingImage2 from "../../img/farming2.webp";
import farmingImage3 from "../../img/farming3.webp";
import farmingImage4 from "../../img/farming4.webp";
import farmingImage5 from "../../img/farming5.webp";
import farmingImage11 from "../../img/farming11.webp";
import farmingImage12 from "../../img/farming12.webp";
import farmingImage13 from "../../img/farming13.webp";
import farmingImage14 from "../../img/farming14.webp";
import farmingImage15 from "../../img/farming15.webp";
import farmingImage16 from "../../img/farming16.webp";

const ExampleCarouselImage = ({image, text }) => {
  return <img className="d-block w-100" src={image} alt={text} />;
};

function UncontrolledExample(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image1} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image2} text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage image={props.image3} text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

const FreshProduct = (props) => {
  return (
    <div className="fresh-product">
      <img src={props.imgSrc} alt="vegetables" />
      <h4>{props.name}</h4>
    </div>
  );
};

const FarmingCategory = (props) => {
  return (
    <div className="farming-category">
      <img className="farming-image" src={props.image} alt="" />
      <span className="category-name">{props.text}</span>
    </div>
  );
};

const Farming = () => {
  return (
    <div>
      <UncontrolledExample image1={farmingImage} image2={farmingImage} image3={farmingImage} />
      <div className="farming-main-container">
        <h2 className="first-heading">SHOP BY CATEGORY</h2>
        <div className="outer-flex-box">
          <div className="shopping-category">
            <FarmingCategory image={farmingImage1} text="All items" />
            <FarmingCategory image={farmingImage2} text="Fresh Fruits" />
            <FarmingCategory image={farmingImage3} text="Vegetables" />
            <FarmingCategory image={farmingImage4} text="Fish and Meat" />
            <FarmingCategory image={farmingImage5} text="Grain" />
          </div>
        </div>
        <div className="farming-banner">
          <div className="banner">
            <div className="banner-text">
              <h3>Bell Paper Orange</h3>
            </div>
          </div>
          <div className="banner">
            <div className="banner-text">
              <h3>Fruit Juice Package</h3>
            </div>
          </div>
          <div className="banner">
            <div className="banner-text">
              <h3>Full Fresh Vegetable</h3>
            </div>
          </div>
        </div>
        <h2 className="first-heading">Our Fresh Products</h2>
        <div className="fresh-product-container">
          <FreshProduct imgSrc={farmingImage11} name="Demo Product" />
          <FreshProduct imgSrc={farmingImage12} name="Demo Product" />
          <FreshProduct imgSrc={farmingImage13} name="Demo Product" />
          <FreshProduct imgSrc={farmingImage14} name="Demo Product" />
          <FreshProduct imgSrc={farmingImage15} name="Demo Product" />
          <FreshProduct imgSrc={farmingImage16} name="Demo Product" />
        </div>
      </div>
    </div>
  );
};

export default Farming;
export {UncontrolledExample};
