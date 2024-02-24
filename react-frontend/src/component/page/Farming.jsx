import React from "react";
import "../../style/farming.css";
import FarmingCard from "../components/farming-card";
import fertiliser from "../../img/fertiliser.png";
import fibres from "../../img/fibres.jpg";
import fish from "../../img/fish.jpg";
import flower from "../../img/flower.jpg";
import fruit from "../../img/fruit.jpg";
import home from "../../img/home.png";
import nurseryPlant from "../../img/nurseryPlant.jpg";
import other from "../../img/other.png";
import poultry from "../../img/poultry.jpg";
import seed from "../../img/seed.jpg";
import spice from "../../img/spice.jpg";
import vegetable from "../../img/vegetable.jpg";
import wood from "../../img/wood.jpg";
import cereal from "../../img/cereal.jpg";
import dairy from "../../img/dairy.jpg";
import vege from "../../img/vege.png";
import { Link } from "react-router-dom";

const farming = () => {
  const message = `Cultivate your dreams with every purchase. Plant joy, harvest satisfaction - shop with us!`;
  return (
    <div className="farming-page">
      <div className="farming-header">
        <div className="tect-container">
          <p className="header-slogan appear-from-left">{message}</p>
        </div>
      </div>
      <div className="search-section appear-from-left">
        <select id="mySelect" className="all-category" name="fruits" defaultValue="all-categories">
          <option value="all-categories">All Categories</option>
          <option value="cereals">Cereals</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="flowers">Flowers</option>
          <option value="poultry">Poultry Product</option>
          <option value="seeds">Seeds</option>
          <option value="spices">Spices</option>
          <option value="plants">Plants</option>
          <option value="fishery">Fishery</option>
          <option value="wood">Wood and Timber</option>
          <option value="manure">Manure</option>
          <option value="fertilizer">Fertilizers</option>
          <option value="equipments">Equipments</option>
          <option value="fabric">Fabric</option>
          <option value="cattle">Cattle</option>
          <option value="home-products">Home made Products</option>
          <option value="others">Others</option>
        </select>
        <input type="text" className="location-search" placeholder="Search Location..." />
        <input className="farming-search-btn" type="button" value="Search" />
      </div>
      <h1 className="farming-h1-heading appear-from-left">Listed Categories</h1>
      <p className="farming-description appear-from-left">From farm to marketplace, we bridge the gap, nurturing a fertile ground for buyers and sellers to cultivate prosperous partnerships in the world of agriculture.</p>
      <div className="listed-categories">
        <Link to="/searchProducts/fibres"><FarmingCard link={fibres} description="Fibres" /></Link>
        <Link to="/searchProducts/organic"><FarmingCard link={vege} description="Organic Products" /></Link>
        <Link to="/searchProducts/vegetable"><FarmingCard link={vegetable} description="Vegetable" /></Link>
        <Link to="/searchProducts/fertiliser"><FarmingCard link={fertiliser} description="Fertiliser" /></Link>
        <Link to="/searchProducts/fish"><FarmingCard link={fish} description="Fish" /></Link>
        <Link to="/searchProducts/flower"><FarmingCard link={flower} description="Flower" /></Link>
        <Link to="/searchProducts/home-made"><FarmingCard link={home} description="Home Made Products" /></Link>
        <Link to="/searchProducts/fruit"><FarmingCard link={fruit} description="Fruit" /></Link>
        <Link to="/searchProducts/nursery-plant"><FarmingCard link={nurseryPlant} description="Nursery Plant" /></Link>
        <Link to="/searchProducts/poultry"><FarmingCard link={poultry} description="Poultry Product" /></Link>
        <Link to="/searchProducts/seed"><FarmingCard link={seed} description="Seed" /></Link>
        <Link to="/searchProducts/spice"><FarmingCard link={spice} description="Spice" /></Link>
        <Link to="/searchProducts/dairy"><FarmingCard link={dairy} description="Dairy Products" /></Link>
        <Link to="/searchProducts/wood"><FarmingCard link={wood} description="Wood" /></Link>
        <Link to="/searchProducts/cereal"><FarmingCard link={cereal} description="Cereal" /></Link>
        <Link to="/searchProducts/other"><FarmingCard link={other} description="Other" /></Link>
      </div>
    </div>
  );
};

export default farming;
