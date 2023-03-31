import React from "react";
import styles from "./Hero.module.css";
import Logo from "../../assets/Logo.png";
import Product1 from "../../assets/product1.jpg";
import HeroOverlay from "../ui/heroOverlay/HeroOverlay";

function Hero() {
  return (
    <div>
      <div
        className={styles.heroContainer}
        style={{ backgroundImage: `url(${Product1})` }}
      >
        <>
          <img src={Logo} alt="" />
          <h1>Welcome!</h1>
        </>
      </div>
      <HeroOverlay />
    </div>
  );
}

export default Hero;
